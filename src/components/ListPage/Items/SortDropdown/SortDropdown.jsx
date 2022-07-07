import React, { useState } from 'react';
import s from './SortDropdown.module.css';

function sort(sortType, sortArr, sortFlags) {
  if (sortType === 'name') {
    sortArr.sort((a, b) => {
      return a.name > b.name ? -sortFlags.name : sortFlags.name;
    });
  } else if (sortType === 'price') {
    sortArr.sort((a, b) => {
      return Number(a.cost) > Number(b.cost)
        ? -sortFlags.price
        : sortFlags.price;
    });
  } else if (sortType === 'category') {
    sortArr.sort((a, b) => {
      return a.categoryId > b.categoryId
        ? -sortFlags.category
        : sortFlags.category;
    });
  }
  return sortArr;
}

function liftSortResult(stateliftHandlerFn, sortedArr) {
  stateliftHandlerFn(sortedArr);
}

export const SortDropdown = props => {
  const sortTypes = ['price', 'name', 'category'];

  const [state, setState] = useState({
    showDropdown: false,
    currentSortType: 'Sort by:',
    sortFlags: {
      price: -1,
      name: -1,
      category: -1,
    },
  });

  if (props.parentStateHandler) {
    const handleClick = event => {
      if (event.target.innerText.includes('Sort by:')) {
        setState({
          ...state,
          showDropdown: !state.showDropdown,
        });
      } else if (event.target.innerText.includes('price')) {
        setState({
          showDropdown: !state.showDropdown,
          currentSortType: 'Sort by:' + event.target.innerText,
          sortFlags: { ...state.sortFlags, price: -state.sortFlags.price },
        });

        let tempVar = [...props.products];
        let sortedArr = sort(event.target.innerText, tempVar, state.sortFlags);

        liftSortResult(props.parentStateHandler, sortedArr);
      } else if (event.target.innerText.includes('name')) {
        setState({
          showDropdown: !state.showDropdown,
          currentSortType: 'Sort by:' + event.target.innerText,
          sortFlags: { ...state.sortFlags, name: -state.sortFlags.name },
        });

        let tempVar = [...props.products];
        let sortedArr = sort(event.target.innerText, tempVar, state.sortFlags);

        liftSortResult(props.parentStateHandler, sortedArr);
      } else if (event.target.innerText.includes('category')) {
        setState({
          showDropdown: !state.showDropdown,
          currentSortType: 'Sort by:' + event.target.innerText,
          sortFlags: {
            ...state.sortFlags,
            category: -state.sortFlags.category,
          },
        });

        let tempVar = [...props.products];
        let sortedArr = sort(event.target.innerText, tempVar, state.sortFlags);

        liftSortResult(props.parentStateHandler, sortedArr);
      }
    };

    if (!state.showDropdown) {
      return (
        <div className={s.container}>
          <div className={s.sort} onClick={handleClick}>
            {state.currentSortType}
          </div>
        </div>
      );
    } else {
      const sortTypesHtml = sortTypes.map(el => (
        <div className={s.sort} key={el} onClick={handleClick}>
          {el}
        </div>
      ));
      return (
        <div className={s.container}>
          <div className={s.sort} onClick={handleClick}>
            {state.currentSortType}
          </div>
          {sortTypesHtml}
        </div>
      );
    }
  }
};
