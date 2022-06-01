import React, { useState } from "react";
import "../CreatePage/CreatePage.css";
import Some from "./Some";

const CreatePage = () => {
  const [val, setVal] = useState("");
  let tempVar = [];
  
    // GET product list
    async function getItemsFromServer() {
        return await fetch("http://localhost:3000/products")
            .then(res => res.json())
            .then(res => reassign(res))
            .then(res => {
              console.log(tempVar)});
    }

    // POST new item
    async function postItemsOnServer() {
        await fetch('http://localhost:3000/product', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: "someItem",
                cost: 1500, //input value
                categoryId: 3
            })
        })
            .then(res => res.json())
            .then(res => console.log(res))
    }

    // DELETE all items from server
    async function deleteItmesFromServer() {
        for (let i = 0; i < tempVar.length; i++) {
            await fetch(`http://localhost:3000/product/${tempVar[i].id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                params: { id: tempVar[i].id },
                body: null
            })
                //.then(res => res.json())
                //.then(res => reassign(res));
        }
    }

    // MODIFY item on server
    async function modifyItmeOnServer() {
        await fetch(`http://localhost:3000/product/${tempVar[0].id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            params: { id: tempVar[0].id },
            body: JSON.stringify({ name: "alalalla", cost: 50, categoryId: 1})
        })
            //.then(res => console.log(res));
    }

    // app.put('/product/:id', (req, res) => {
    //     const respond = getResponder(res);
    //     const { id } = req.params;
    //     const { name, cost, categoryId } = req.body;

    function reassign(baseVar) {
        tempVar = baseVar;
        return tempVar
    }

    function handleChange(e) {
      console.log(e.target.value);
    }

    let showArr = tempVar.map((item)=> {
      return (<div>{item}</div>)  
    })
  
    function showNewItem() {
      console.log(tempVar);
      tempVar.map((item)=> {
        return (<div>{item}</div>)  
      })
    }
    
  return (
    <div>
      <div className="container">
        <div className="element-wrapper">
          Enter product name:
          <input className="input" type="text" onChange={handleChange}/>
        </div>
        <div className="element-wrapper">
          Product category:
          <select className="items">
            <option value="item1">Item 1</option>
            <option value="item2">Item 2</option>
            <option value="item3">Item 3</option>
          </select>
        </div>
        <div className="element-wrapper">
          Price:
          <input
            type="text"
            pattern="[0-9]*"
            placeholder="Only numbers"
            className="input"
            value={val}
            onChange={(e) =>
              setVal((v) => (e.target.validity.valid ? e.target.value : v))
            }
          />
        </div>

        <div className="add" id="cancel" onClick={() => console.log("asd")}>
          Cancel
        </div>
        <div className="add" onClick={showNewItem}>
            Save
        </div>
        <div>
        
        </div>
      </div>
      
      <div>
                <button onClick={getItemsFromServer}>GET data</button>
                <button onClick={postItemsOnServer}>POST data</button>
                <button onClick={deleteItmesFromServer}>DELETE data</button>
                <button onClick={modifyItmeOnServer}>PUT/MODIFY data</button>
            </div>
    </div>
  );
};

export default CreatePage;