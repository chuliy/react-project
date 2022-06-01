import React from 'react';
import "./Filter.css";

export const Filter = () => {
    return (
        <div className='filter-container'>
            <div className='filters-header'>FILTERS</div>
            <div className='filters'>
                <div><input type="checkbox" name="filter1" /><label htmlFor="filter1">filter1</label></div>
                <div><input type="checkbox" name="filter2" /><label htmlFor="filter2">filter2</label></div>
                <div><input type="checkbox" name="filter3" /><label htmlFor="filter3">filter3</label></div>
                <div><input type="checkbox" name="filter4" /><label htmlFor="filter4">filter4</label></div>
            </div>
        </div>
    );
};