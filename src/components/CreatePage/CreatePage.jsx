import React, { useState, useEffect } from 'react';
import s from '../CreatePage/CreatePage.module.css';
import { getCategories, getItems, postItem } from '../../serverqueries';
import { useForm } from 'react-hook-form';

const CreatePage = () => {
  const [val, setVal] = useState({ name: '', categoryId: null, cost: '' });
  const [list, setList] = useState([]);

  const { handleSubmit } = useForm();
  const onSubmit = (data, e) => { };

  useEffect(() => {
    getCategories().then(res => {
      setVal({ name: "", categoryId: res[0].id, cost: "" });
      const arr = res.map((el, i)=> el = (<option key={res[i].id} value={res[i].id}>{res[i].name}</option>))
      setList(arr);
    });
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <div className={s.container}>
          <div className={s.wrapper}>
            Enter product name:
            <input
              className={s.input}
              type="text"
              data-cy="product-name"
              onChange={(e) => setVal({ name: e.target.value, categoryId: val.categoryId, cost: val.cost })}
            />
          </div>
          <div className={s.wrapper}>
            Product category:
            <select
              className={s.items}
              data-cy="product-category"
              onChange={e =>
                setVal({
                  name: val.name,
                  categoryId: Number(e.target.value),
                  cost: val.cost,
                })
              }
            >
              {list}
            </select>
          </div>
          <div className={s.wrapper}>
            Price:
            <input
              type="number"
              placeholder="Only numbers"
              className={s.input}
              data-cy="product-cost"
              onChange={(e) => setVal({ name: val.name, categoryId: val.categoryId, cost: e.target.value })
              }
            />
          </div>

           <input
            className={s.add}
            id={s.cancel}
            type="reset"
            value="Cancel"
            data-cy="submit"
            onClick={e => {
              setVal({name:'',categoryId:null,cost:''})
              console.log('Item posted :', val);
              console.log(getItems());
            }}
          ></input>
          <input
            className={s.add}
            type="submit"
            value="Save"
            data-cy="submit"
            onClick={e => {
              postItem({
                name: val.name,
                categoryId: val.categoryId,
                cost: val.cost,
              });
              console.log('Item posted :', val);
              console.log(getItems());
            }}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default CreatePage;
