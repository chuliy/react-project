import React from 'react';
import "./Filter.css";

export const Filter = (props) => {

    return (
        <div className='filter-container'>
            <div className='filters-header'>FILTERS</div>
            <div className='filters'>
                {props.pFilters.mappedFiltersToJsx}
            </div>
        </div>
    );
};