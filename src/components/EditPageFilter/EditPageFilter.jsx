import React, { useState, useEffect } from 'react';
import s from './EditPageFilter.module.css';
import { getItems, getCategories, deleteItem } from '../../serverqueries';

function matchCategory(categoryId, categoriesListOfObj) {
  const products = categoriesListOfObj.find(obj => obj.id === categoryId);
  return products.name;
}

function EditPageFilter() {
  // the value of the search field
  const [name, setName] = useState('');

  const [stateProducts, setStateProducts] = useState({products: [], backupProducts: []});
  const [stateCategories, setStateCategories] = useState([]);

  useEffect(() => {
    getItems().then(items => { setStateProducts({ products: items, backupProducts: items }) });
    getCategories().then(items => setStateCategories(items));
  }, []);

  const deleteItems = idToDelete => {
    const result = stateProducts.products.filter(item => item.id !== idToDelete)
    setStateProducts({backupProducts: result, products: result});
    deleteItem(idToDelete);
  };


  const filter = e => {
    const keyword = e.target.value;
    if (keyword !== '') {
      const results = stateProducts.backupProducts.filter(products => {
        return products.name.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setStateProducts({ ...stateProducts, products: results });
    } else {
      setStateProducts({ ...stateProducts, products: stateProducts.backupProducts });
    }
    // If the text field is empty, show all products

    setName(keyword);
  }

  let mappedStateToJsx = [];
  if (stateProducts.products.length > 0 && stateCategories.length > 0) {
    mappedStateToJsx = stateProducts.products.map(products => {
      return (
        <li key={products.id} className={s.product}>
          <span className={s.id}>
            {matchCategory(products.categoryId, stateCategories)}
          </span>
          <span className={s.name}>{products.name}</span>
          <button type="submit" className={s.button}>
            Edit
          </button>
          <button
            type="submit"
            className={s.buttonDelete}
            onClick={() => deleteItems(products.id)}
          >
            Delete
          </button>
        </li>
      );
    });
  }


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
        {stateProducts.products && stateProducts.products.length > 0 ? (
          <div>{mappedStateToJsx} </div>
        ) : (
          <h1>No results found!</h1>
        )}
      </div>
    </div>
  );
}

export default EditPageFilter;
