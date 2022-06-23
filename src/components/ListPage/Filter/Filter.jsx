import React from 'react';
import "./Filter.css";

export const Filter = (props) => {
    if (props.filters.length > 0) {

        const mappedFiltersToJsx = props.filters.map(
            (el) =>
            (
                <div key={el.id}>
                    <input
                        type="checkbox"
                        name={el.name}
                        onChange={(e) => {props.filtersHandler(e.target.name, props.filterState)}}
                    />
                    <label htmlFor={el.name}>
                        {el.name}
                    </label>
                </div>
            )
        )

        return (
            <div className='filter-container'>
                <div className='filters-header'>FILTERS</div>
                <div className='filters'>
                    {mappedFiltersToJsx}
                </div>
            </div>
        )
    }
};