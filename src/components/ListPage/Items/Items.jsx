import React from 'react';
import { SortDropdown } from './SortDropdown/SortDropdown';
import './Items.css';

export const Items = props => {
  let tempVar = [{}];

  // GET product list
  async function getItemsFromServer() {
    return await fetch('http://localhost:3000/products')
      .then(res => res.json())
      .then(res => reassign(res))
      .then(res => console.log(tempVar));
  }

  // POST new item
  async function postItemsOnServer() {
    await fetch('http://localhost:3000/product', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'someItem',
        cost: 1500,
        categoryId: 3,
      }),
    });
    //.then(res => res.json())
    //.then(res => console.log(res));
  }

  // DELETE all items from server
  async function deleteItmesFromServer() {
    for (let i = 0; i < tempVar.length; i++) {
      await fetch(`http://localhost:3000/product/${tempVar[i].id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        params: { id: tempVar[i].id },
        body: null,
      });
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
      body: JSON.stringify({ name: 'alalalla', cost: 50, categoryId: 1 }),
    });
    //.then(res => console.log(res));
  }

  // app.put('/product/:id', (req, res) => {
  //     const respond = getResponder(res);
  //     const { id } = req.params;
  //     const { name, cost, categoryId } = req.body;

  function reassign(baseVar) {
    tempVar = baseVar;
  }

  return (
    <div className="items-main-container">
      <SortDropdown />
      <div>
        <button onClick={getItemsFromServer}>GET data</button>
        <button onClick={postItemsOnServer}>POST data</button>
        <button onClick={deleteItmesFromServer}>DELETE data</button>
        <button onClick={modifyItmeOnServer}>PUT/MODIFY data</button>
      </div>
    </div>
  );
};
