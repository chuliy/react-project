import React from 'react';
import "./Item.css";

export const Item = (props) => {
    
    return (
        <div className='item-wrapper'>
            <div className='item-info-container'>
                <div className='item-info' data-cy='item-data-name'>{props.productName}</div>
                <div className='item-info'>{props.productCategoryId}</div>
                <div className='item-info' data-cy='item-data-cost'>{props.productCost}</div>
            </div>
        </div>
    );
};