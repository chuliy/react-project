import React, { useState } from 'react';
import "./SortDropdown.css";

function handleSorting(sortType, sortArr) {
    if (sortType === "by name") {
        sortArr.sort((a, b) => {
            return a.name > b.name ? -1 : 1
        })
    }
    return sortArr
}

function liftSortResult(stateliftHandlerFn, sortedArr, state) {
    stateliftHandlerFn({...state, products: sortedArr});
}

export const SortDropdown = (props) => {
    const sortTypes = ["by price", "by name", "by category"];
    
    const [statea, setStatea] = useState({
        showDropdown: false,
        currentSortType: "Sort:"
    });
    
    const handleClick = (event) => {
        setStatea({
            showDropdown: !statea.showDropdown,
            currentSortType: event.target.innerText
        });
        
        if (event.target.innerText == "by name") {
            let sortedArr = handleSorting(event.target.innerText, props.pState.products);

            liftSortResult(props.pStateHandler, sortedArr, props.pState);
        }

    }

    if (!statea.showDropdown) {
        return (
            <div className='dropdown-main-container'>
                <div className='d' onClick={handleClick}>{statea.currentSortType}</div>
            </div >
        );
    } else {
        const sortTypesHtml = sortTypes.map((el) => (<div className='d' key={el} onClick={handleClick}>{el}</div>))
        return (
            <div className='dropdown-main-container'>
                <div className='d' onClick={handleClick}>{statea.currentSortType}</div>
                {sortTypesHtml}
            </div>
        );
    }
};