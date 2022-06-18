import React, { useState, useEffect } from "react";
import "../CreatePage/CreatePage.css";
import { getCategories, getItems, postItem } from '../../serverqueries';
import { useForm } from "react-hook-form";

const CreatePage = () => {
  const [val, setVal] = useState({ name: "", categoryId: null, cost: "" });
  const [list, setList] = useState([]);
  console.log(val);

  const { handleSubmit } = useForm();
  const onSubmit = (data, e) => { };


  useEffect(() => {
    getCategories().then(res => {
      setVal({ name: "", categoryId: res[0].id, cost: "" });
      let tempVar = [];
      for (let i = 0; i < res.length; i++) {
        tempVar[i] = (<option key={Math.random()} value={res[i].id}>{res[i].name}</option>);
      }
      setList(tempVar);
    });
  }, []);

  return (
    <div>

      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="container" >
          <div className="element-wrapper">
            Enter product name:
            <input
              className="input"
              type="text"
              data-cy="product-name"
              // value={val.name} 
              onChange={(e) => setVal({ name: e.target.value, categoryId: val.categoryId, cost: val.cost })}
            />
          </div>
          <div className="element-wrapper">
            Product category:
            <select className="items"
              data-cy="product-category"
              onChange={(e) => setVal({
                name: val.name,
                categoryId: Number(e.target.value),
                cost: val.cost
              })}>
              {list}
            </select>
          </div>
          <div className="element-wrapper">
            Price:
            <input
              type="number"
              placeholder="Only numbers"
              className="input"
              data-cy="product-cost"
              // value={val.cost}
              onChange={(e) => setVal({ name: val.name, categoryId: val.categoryId, cost: e.target.value })
              }
            />
          </div>

          <button className="add" id="cancel" onSubmit={onSubmit} >
            Cancel
          </button>
          {/* <button className="add" onClick={() => {setVal({name:'',categoryId:null,cost:''})}}>
            Reset
          </button> */}
          <input className="add" type='reset'
            value="Save"
            data-cy="submit"
            onClick={(e) => {
              postItem({ name: val.name, categoryId: val.categoryId, cost: val.cost })
              console.log('Item posted :', val)
              console.log(getItems())
            }}
          >
          </input>
        </div>
      </form>

    </div>
  );
};

export default CreatePage;
