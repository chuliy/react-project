import React, { useState, useEffect } from 'react';
import { Filter } from './Filter/Filter';
import { Items } from './Items/Items';
import { getItems, getCategories } from '../../serverqueries';
import s from './ListPage.module.css';

function initFilterState(categories) {
  const obj = {};
  for (let i = 0; i < categories.length; i++) {
    var tmp = categories[i].name;
    obj[tmp] = false;
  }
  return obj
}

const ListPage = props => {
  const [products, setProducts] = useState({ products: [], backupProducts: [] });
  const [categories, setCategories] = useState([]);
  const [filterState, setFilterState] = useState({});

  useEffect(() => {
    getItems().then(res => {
      setProducts({ products: res, backupProducts: res });
    })
    getCategories().then(res => {
      setCategories(res);
      return res
    })
      .then((res) => { setFilterState(initFilterState(res)) });
  }, []);

  const stateLiftHandler = (newState) => {
    setProducts({ products: newState, backupProducts: newState });
  }

  const handleFilters = (filterType, filterState) => {
    let tv1 = { ...filterState, [filterType]: !filterState[filterType] };
    setFilterState({ ...tv1 });

    let arr = [];
    let newState = [];
    for (let key in tv1) {
      if (tv1[key] === true) {
        for (let i = 0; i < categories.length; i++) {
          if (categories[i].name === key) {
            arr.push(categories[i].id);
          }
        }
      }
    }

    newState = products.backupProducts.filter((obj) => arr.includes(obj.categoryId));

    if (arr.length > 0) {
      setProducts({ ...products, products: newState });
    } else {
      setProducts({ ...products, products: products.backupProducts });
    }
  }
  if (products.products) {
    return (
      <div className={s.container}>
        <Filter filters={categories} filtersHandler={handleFilters} filterState={filterState} />
        <Items products={products.products} categories={categories} parentStateHandler={stateLiftHandler} />
      </div>
    )
  }
};

export default ListPage;
