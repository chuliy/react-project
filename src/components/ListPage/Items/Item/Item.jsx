import React from 'react';
import "./Item.css";

export const Item = (props) => {
    return (
        <div className='item-wrapper'>
            <div className='item-image'></div>
            <div className='item-info-container'>
                <div className='item-info'>{props.pCategoryId}</div>
                <div className='item-info'>{props.pName}</div>
                <div className='item-info'>{props.pCost}</div>
            </div>
        </div>
    );
};