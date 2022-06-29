import {React,useState} from "react";
import { getItems, modifyItem, postItem } from "../../serverqueries";
import val from '../CreatePage/CreatePage'
import setVal from '../CreatePage/CreatePage'

import "./Modal.css";

function Modal(props) {
    const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              props.setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        
        <div className="body">

        <div>{props.name}</div>
        
          <input className="input" type="text" 
            value={value} 
            onChange={(e)=> onChange}
            // onChange={(e) => setVal({ name: e.target.value, categoryId: val.categoryId, cost: val.cost })}
          />
       
        </div>
        <div className="footer">
          <button
            onClick={() => {
              props.setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button
          onClick={() => {
            modifyItem({ name: value.name})
            console.log('Item posted :', val)
            console.log(getItems())
          }}
          id="contBtn">Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;