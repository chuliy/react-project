import React, { useState } from 'react';
import "./SortDropdown.css";

function sort(sortType, sortArr) {
    // let tempVar = sortingFlag;
    console.log("sort fucntion arguments:", sortType, sortArr);
    if (sortType === "by name") {
        sortArr.sort((a, b) => {
            return a.name > b.name ? 1 : -1
        })
    }
    else if (sortType === "by price") {
        sortArr.sort((a, b) => {
            return Number(a.cost) > Number(b.cost) ? 1 : -1
        })
    }
    else if (sortType === "by category") {
        sortArr.sort((a, b) => {
            return a.categoryId > b.categoryId ? 1 : -1 
        })
    }
    return sortArr
}

function liftSortResult(stateliftHandlerFn, sortedArr) {
    stateliftHandlerFn(sortedArr);
}

export const SortDropdown = (props) => {
    const sortTypes = ["by price", "by name", "by category"];

    const [statea, setStatea] = useState({
        showDropdown: false,
        currentSortType: "Sort:"
    });

    if (props.parentStateHandler) {
        const handleClick = (event) => {
            console.log("current PRE click state:", statea);
            setStatea({
                showDropdown: !statea.showDropdown,
                currentSortType: event.target.innerText,
            });
            // ??? МОЖНО ЛИ СДЕЛАТЬ АДЕКВАТНЕЕ? -_-
            let tempVar = [...props.products];
            let sortedArr = sort(event.target.innerText, tempVar);

            liftSortResult(props.parentStateHandler, sortedArr);
            // liftSortResult(props.parentStateHandler, [{name: 'DNIWE', cost: '10001', categoryId: 1, id: '5xzqwe1q2134sd211'}, {name: 'SAMOE DNO', cost: '10001', categoryId: 1, id: '5xzqwe1q2134sd211'}])
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
    }


};