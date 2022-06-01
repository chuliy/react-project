import React, { useEffect, useState } from 'react';
import { SortDropdown } from './SortDropdown/SortDropdown';
import { Item } from './Item/Item';
import { getItems, getCategories } from '../../../serverqueries';
import "./Items.css";

function matchCategory(categoryId, categoriesListOfObj) {
    const category = categoriesListOfObj.find(obj => obj.id === categoryId);
    return category.name
}

let tempVar = {products:[], categories:[]};

export const Items = (props) => {

    const [state, setState] = useState({
        products: [],
        categories: []
    });
    
    // МОЖНО ЛИ ЭТО СДЕЛАТЬ АДЕКВАТНЕЕ?  
    useEffect(() => {
            getItems().then(res => {
                tempVar.products=res;
            })
                .then(getCategories().then(res => {
                    tempVar.categories=res;
                    setState(tempVar);
                }));    
    });

    let mappedStateToJsx = state.products.map(
        (el, ix) =>
        (<Item
            key={Math.random()}
            pName={el.name}
            pCategoryId={matchCategory(el.categoryId, state.categories)}
            pCost={el.cost}>
        </Item>));

    return (
        <div className='items-main-container'>
            <SortDropdown />
            <div>
                {mappedStateToJsx}
            </div>
        </div>
    );
};
