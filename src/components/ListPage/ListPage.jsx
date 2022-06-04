import React, { useState, useEffect } from 'react';
import { Filter } from './Filter/Filter';
import { Items } from './Items/Items';
import { Item } from './Items/Item/Item';
import { getItems, getCategories } from '../../serverqueries';
import "./ListPage.css";

function matchCategory(categoryId, categoriesListOfObj) {
    const category = categoriesListOfObj.find(obj => obj.id === categoryId);
    return category.name
}

const ListPage = (props) => {
    const [state, setState] = useState({ products: [], categories: [], mappedItemsToJsx: [], mappedFiltersToJsx: [] });

    const stateLiftHandler =  (newState) => {
        setState(newState);
        console.log("DONE", state);
    }
    stateLiftHandler.bind(this);

    console.log(state);

    useEffect(() => {
        let tempVar = { products: [], categories: [], mappedItemsToJsx: null, mappedFiltersToJsx: null };
        getItems().then(res => {
            tempVar.products = res;
        })
            .then(getCategories()
                .then(res => {
                    tempVar.categories = res;

                    tempVar.mappedFiltersToJsx = tempVar.categories.map((el) => (
                        <div key={el.id}>
                            <input type="checkbox" name={el.name} />
                            <label htmlFor={el.name}>
                                {el.name}
                            </label>
                        </div>
                    ));
                }).then(res => {

                    let mappedItemsToJsx = tempVar.products.map(
                        (el) =>
                        (<Item
                            key={Math.random()}
                            pName={el.name}
                            pCategoryId={matchCategory(el.categoryId, tempVar.categories)}
                            pCost={el.cost}>
                        </Item>));

                    tempVar.mappedItemsToJsx = mappedItemsToJsx;

                    setState(tempVar);
                }
                ));
    }, []);

    return (
        <div className='list-page-main-container'>
            <Filter pFilters={state} />
            <Items pState={state} pStateHandler={stateLiftHandler}/>
        </div>
    )
};

export default ListPage;