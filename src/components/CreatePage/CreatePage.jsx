import React, { useState, useEffect } from "react";
import "../CreatePage/CreatePage.css";
import { getCategories, postItem } from '../../serverqueries';

//let flag = true;

const CreatePage = () => {
  const [val, setVal] = useState({ name: "", categoryId: null, cost: "" });
  const [list, setList] = useState([]);

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

  // ??????????????????????????????????????????????????
  // if (flag) {
  //   (async function abcd() {
  //     getCategories().then(res => {
  //       setVal({ name: "", categoryId: res[0].id, cost: "" });
  //       let tempVar = [];
  //       for (let i = 0; i < res.length; i++) {
  //         tempVar[i] = (<option key={Math.random()} value={res[i].id}>{res[i].name}</option>);
  //       }
  //       setList(tempVar);
  //     })
  //     flag = false;
  //   })()
  // }

  console.log(val);

  return (
    <div>
      <div className="container">
        <div className="element-wrapper">
          Enter product name:
          <input className="input" type="text" onChange={(e) => setVal({ name: e.target.value, categoryId: val.categoryId, cost: val.cost })} />
        </div>
        <div className="element-wrapper">
          Product category:
          <select className="items" onChange={(e) => setVal({ name: val.name, categoryId: Number(e.target.value), cost: val.cost })}>
            {list}
          </select>
        </div>
        <div className="element-wrapper">
          Price:
          <input
            type="number"
            placeholder="Only numbers"
            className="input"
            //value={val}
            onChange={(e) => setVal({ name: val.name, categoryId: val.categoryId, cost: e.target.value })
              //setVal((v) => (e.target.validity.valid ? e.target.value : v))
            }
          />
        </div>

        <div className="add" id="cancel" onClick={() => console.log("asd")}>
          Cancel
        </div>
        <div className="add" onClick={() => postItem({ name: val.name, categoryId: val.categoryId, cost: val.cost })}>
          Save
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
