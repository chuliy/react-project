import React from 'react';
import s from "./Filter.module.css";

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
            <div className={s.container}>
                <div className={s.header}>FILTERS</div>
                <div className={s.filters}>
                    {mappedFiltersToJsx}
                </div>
            </div>
        )
    }
};