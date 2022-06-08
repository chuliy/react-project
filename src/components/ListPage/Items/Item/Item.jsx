import React from 'react';
import "./Item.css";

export const Item = (props) => {
    
    return (
        <div className='item-wrapper'>
            <div className='item-image'></div>
            <div className='item-info-container'>
                <div className='item-info'>{props.productCategoryId}</div>
                <div className='item-info'>{props.productName}</div>
                <div className='item-info'>{props.productCost}</div>
            </div>
        </div>
    );
};