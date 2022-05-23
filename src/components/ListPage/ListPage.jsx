import React from 'react';
import { Filter } from './Filter/Filter';
import { Items } from './Items/Items';
import "./ListPage.css";

const ListPage = (props) => {
    return (
        <div className='list-page-main-container'>
            <Filter />
            <Items />
        </div>
    );
};

export default ListPage;