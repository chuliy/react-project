import React, { useState, useEffect } from 'react';
import { Filter } from './Filter/Filter';
import { Items } from './Items/Items';
import { getItems, getCategories } from '../../serverqueries';
import "./ListPage.css";

const ListPage = (props) => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getItems().then(res => {
            setProducts(res);
        });
        getCategories().then(res => {
            setCategories(res);
        });
    }, []);

    const stateLiftHandler = (newState) => {
        setProducts(newState);
    }

    return (
        <div className='list-page-main-container'>
            <Filter filters={categories} />
            <Items products={products} categories={categories} parentStateHandler={stateLiftHandler} />
        </div>
    )
};

export default ListPage;