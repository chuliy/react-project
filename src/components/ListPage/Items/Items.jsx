import React from 'react';
import { SortDropdown } from './SortDropdown/SortDropdown';
import "./Items.css";

export const Items = (props) => {

    return (
        <div className='items-main-container'>
            <SortDropdown pStateHandler={props.pStateHandler} pState={props.pState}/>
            <div>
                {props.pState.mappedItemsToJsx}
            </div>
        </div>
    );
};
