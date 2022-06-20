import React from 'react';
import { SortDropdown } from './SortDropdown/SortDropdown';
import { Item } from './Item/Item';
import "./Items.css";

function matchCategory(categoryId, categoriesListOfObj) {
    const category = categoriesListOfObj.find(obj => obj.id === categoryId);
    return category.name
}

export const Items = (props) => {
    if (props.products.length > 0 && props.categories.length > 0) {
        
        const mappedItemsToJsx = props.products.map(
            (el) =>
            (<Item
                key={Math.random()}
                productName={el.name}
                productCategoryId={matchCategory(el.categoryId, props.categories)}
                productCost={el.cost}>
            </Item>));
        
        return (
            <div className='items-main-container'>
                <SortDropdown parentStateHandler={props.parentStateHandler} products={props.products} />
                <div>
                    {mappedItemsToJsx}
                </div>
            </div>
        )
    }
<<<<<<< HEAD
};
=======
};
>>>>>>> fb482c00e854a31ceac12e9bd877553fa71b0029
