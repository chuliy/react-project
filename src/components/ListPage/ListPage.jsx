import React, { useState, useEffect } from 'react';
import { Filter } from './Filter/Filter';
import { Items } from './Items/Items';
import { getItems, getCategories } from '../../serverqueries';
import "./ListPage.css";

function initFilterState(categories) {
    const obj = {};
    for (let i = 0; i < categories.length; i++) {
        var tmp = categories[i].name;
        obj[tmp] = false;
    }
    return obj
}

const ListPage = (props) => {

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

    // PROBLEMS
    // FILTER HAS A BUG WHEN WE HAVE ONLY 1 ITEM ON THE LIST
    // WHEN WE HAVE 0 ITEMS THEN <Items /> component isn't visible
    // CATEGORY REVERSE SORTING ISN"T WORKING

    const handleFilters = (filterType, filterState) => {
        let tv1 = { ...filterState, [filterType]: !filterState[filterType] };

        /// ????? как связать асинхронный setState с синхронным кодом, который зависит от изменного этим setState'ом стейта?
        setFilterState({ ...tv1 });
        /// ????? while prev state=new state do nothing?

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

        /// Как в addEventListener event передается не первым аргументом, если обычно закрепление аргумента идется по порядку?

        /// ???????? как фильтровать по нескольким логическим условиям, если неизвестно кол-во этих условий?
        newState = products.backupProducts.filter((obj) => { return (obj.categoryId === arr[0]) || (obj.categoryId === arr[1]) || (obj.categoryId === arr[2]) });
        /// ????????
        
        if (newState.length > 0) {
            setProducts({ ...products, products: newState });
        } else {
            setProducts({ ...products, products: products.backupProducts });
        }
    }
    if (products.products) {
        return (
            <div className='list-page-main-container'>
                <Filter filters={categories} filtersHandler={handleFilters} filterState={filterState} />
                <Items products={products.products} categories={categories} parentStateHandler={stateLiftHandler} />
            </div>
        )
    }
};

export default ListPage;