import React, { useState, useEffect } from 'react';
import s from './EditPageFilter.module.css';
import {
  getItems,
  getCategories,
  deleteItem,
  baseUrl,
} from '../../serverqueries';
import { Item } from './../ListPage/Items/Item/Item';

// This holds a list of some fiction products
// Some  have the same name but different cost and id
const PRODUCTS = [
  { categoryId: 1, name: 'Einaudi', cost: 500 },
  { categoryId: 2, name: 'Brahms', cost: 600 },
  { categoryId: 3, name: 'Tom Henk', cost: 700 },
  { categoryId: 4, name: 'Tom Handric', cost: 800 },
];

function matchCategory(categoryId, categoriesListOfObj) {
  const category = categoriesListOfObj.find(obj => obj.id === categoryId);
  return category.name;
}

let tempVar = { products: [], categories: [] };

function EditPageFilter() {
  // the value of the search field
  const [name, setName] = useState('');
  const [val, setVal] = useState({
    name: '',
    categoryId: null,
    cost: '',
    id: '',
  });

  const [state, setState] = useState({
    products: [],
    categories: [],
  });
  useEffect(() => {
    getItems()
      .then(res => {
        tempVar.products = res;
      })
      .then(
        getCategories().then(res => {
          tempVar.categories = res;
          setState(tempVar);
        }),
      );
  },);
  let mappedStateToJsx = state.products.map((el, ix) => (
    <>
      <Item
        key={Math.random()}
        pName={el.name}
        pCategoryId={matchCategory(el.categoryId, state.categories)}
        pCost={el.cost}
        pId={el.id}
      ></Item>
      <button type="submit" className={s.button}>
        Edit
      </button>
      <button
        type="submit"
        className={s.buttonDelete}
        onClick={e => {
          dltItem(el.id);
        }}>
        Delete
      </button>
    </>
  ));

  async function dltItem(idToDelete) {
    await fetch(`${baseUrl}/product/${idToDelete}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      params: { id: idToDelete },
      body: null,
    })
    .then(res => {
      tempVar.products = res;
      console.log(res);
    })
    // .then(res => {
    //   getItems().then((res)=> {setState(res)})
    // })
      .then(
    console.log(`Item ${idToDelete} deleted`)
      )
      }

  // the search result
  const [foundProducts, setFoundProducts] = useState(PRODUCTS);

  const filter = e => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = PRODUCTS.filter(product => {
        return product.name.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundProducts(results);
    } else {
      setFoundProducts(PRODUCTS);
      // If the text field is empty, show all products
    }

    setName(keyword);
  };

  return (
    <div className={s.container}>
      <input
        type="search"
        value={name}
        onChange={filter}
        className={s.input}
        placeholder="Search by name"
      />

      <div className={s.list}>
        {foundProducts && foundProducts.length > 0 ? (
          foundProducts.map(product => (
            <li key={product.id} className={s.product}>
              <span className={s.id}>{product.categoryId}</span>
              <span className={s.name}>{product.name}</span>
              {/* <span className={s.cost}>{product.cost}$</span> */}
              <button type="submit" className={s.button}>
                Edit
              </button>
              <button
                type="submit"
                className={s.buttonDelete}
                onClick={e => {
                  dltItem(val.name);
                  deleteItem({
                    name: val.name,
                    categoryId: val.categoryId,
                    cost: val.cost,
                  });
                  console.log(getItems());
                }}
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <h1>No results found!</h1>
        )}
        {mappedStateToJsx}
      </div>
    </div>
  );
}

export default EditPageFilter;
