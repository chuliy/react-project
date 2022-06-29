import React from 'react';
import s from './Item.module.css';

export const Item = props => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.info} data-cy="item-data-name">
          {props.productName}
        </div>
        <div className={s.info}>{props.productCategoryId}</div>
      </div>
      <div className={s.cost} data-cy="item-data-cost">
        {props.productCost}
      </div>
    </div>
  );
};
