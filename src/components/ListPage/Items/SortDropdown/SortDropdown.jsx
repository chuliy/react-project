import React, { useState } from 'react';
import "./SortDropdown.css";

<<<<<<< HEAD
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
=======
function sort(sortType, sortArr, sortFlags) {
    console.log("sort fucntion arguments:", sortType, sortArr);
    if (sortType === "name") {
        sortArr.sort((a, b) => {
            return a.name > b.name ? -sortFlags.name : sortFlags.name
        })
    }
    else if (sortType === "price") {
        sortArr.sort((a, b) => {
            return Number(a.cost) > Number(b.cost) ? -sortFlags.price : sortFlags.price
        })
    }
    else if (sortType === "category") {
        sortArr.sort((a, b) => {
            return a.categoryId > b.categoryId ? -sortFlags.category : sortFlags.category
>>>>>>> fb482c00e854a31ceac12e9bd877553fa71b0029
        })
    }
    return sortArr
}

function liftSortResult(stateliftHandlerFn, sortedArr) {
    stateliftHandlerFn(sortedArr);
}

export const SortDropdown = (props) => {
<<<<<<< HEAD
    const sortTypes = ["by price", "by name", "by category"];

    const [statea, setStatea] = useState({
=======
    const sortTypes = ["price", "name", "category"];

    const [state, setState] = useState({
>>>>>>> fb482c00e854a31ceac12e9bd877553fa71b0029
        showDropdown: false,
        currentSortType: "Sort by:",
        sortFlags: {
            price: -1,
            name: -1,
            category: -1
        }
    });

    if (props.parentStateHandler) {
        const handleClick = (event) => {
<<<<<<< HEAD
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
=======
            if (event.target.innerText.includes("Sort by:")) {
                setState({
                    ...state,
                    showDropdown: !state.showDropdown
                });
                
            } else if (event.target.innerText.includes("price")) {
                setState({
                    showDropdown: !state.showDropdown,
                    currentSortType: "Sort by:" + event.target.innerText,
                    sortFlags: { ...state.sortFlags, price: -state.sortFlags.price }
                });

                let tempVar = [...props.products];
                let sortedArr = sort(event.target.innerText, tempVar, state.sortFlags);

                liftSortResult(props.parentStateHandler, sortedArr);

            } else if (event.target.innerText.includes("name")) {
                setState({
                    showDropdown: !state.showDropdown,
                    currentSortType: "Sort by:" + event.target.innerText,
                    sortFlags: { ...state.sortFlags, name: -state.sortFlags.name }
                });

                let tempVar = [...props.products];
                let sortedArr = sort(event.target.innerText, tempVar, state.sortFlags);

                liftSortResult(props.parentStateHandler, sortedArr);

            } else if (event.target.innerText.includes("category")) {
                setState({
                    showDropdown: !state.showDropdown,
                    currentSortType: "Sort by:" + event.target.innerText,
                    sortFlags: { ...state.sortFlags, name: -state.sortFlags.category }
                });

                let tempVar = [...props.products];
                let sortedArr = sort(event.target.innerText, tempVar, state.sortFlags);

                liftSortResult(props.parentStateHandler, sortedArr);
        
            };

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
        }
    };
>>>>>>> fb482c00e854a31ceac12e9bd877553fa71b0029
