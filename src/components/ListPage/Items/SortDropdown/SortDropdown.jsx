import React, { useState } from 'react';
import "./SortDropdown.css";

export const SortDropdown = (props) => {
    const sortTypes = ["by price", "by name", "by category"];
    const [state, setState] = useState({
        showDropdown: false,
        currentSortType: "Sort:"
    });
    const handleClick = (event) => {
        setState({
            showDropdown: !state.showDropdown,
            currentSortType: event.target.innerText
        });
    }

    if (!state.showDropdown) {
        return (
            <div className='dropdown-main-container'>
                <div className='d' onClick={handleClick}>{state.currentSortType}</div>
            </div >
        );
    } else {
        const sortTypesHtml = sortTypes.map((el) => (<div className='d' key={el} onClick={handleClick}>{el}</div>))
        return (
            <div className='dropdown-main-container'>
                <div className='d' onClick={handleClick}>{state.currentSortType}</div>
                {sortTypesHtml}
            </div>
        );
    }
};