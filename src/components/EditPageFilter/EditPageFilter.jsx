import React, { useState } from 'react';
import s from './EditPageFilter.module.css';
// This holds a list of some fiction products
// Some  have the same name but different cost and id
const PRODUCTS = [
  { categoryId: 1, name: 'Einaudi', cost: 500 },
  { categoryId: 2, name: 'Brahms', cost: 600 },
  { categoryId: 3, name: 'Tom Henk', cost: 700 },
  { categoryId: 4, name: 'Tom Handric', cost: 800 },
];

function App() {
  // the value of the search field
  const [name, setName] = useState('');

  // the search result
  const [foundProducts, setFoundProducts] = useState(PRODUCTS);

  const filter = e => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = PRODUCTS.filter(product => {
        return product.name.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundProducts(results);
    } else {
      setFoundProducts(PRODUCTS);
      // If the text field is empty, show all products
    }

    setName(keyword);
  };

  return (
    <div className={s.container}>
      <input
        type="search"
        value={name}
        onChange={filter}
        className={s.input}
        placeholder="Search by name"
      />

      <div className={s.list}>
        {foundProducts && foundProducts.length > 0 ? (
          foundProducts.map(product => (
            <li key={product.id} className={s.product}>
              <span className={s.id}>{product.categoryId}</span>
              <span className={s.name}>{product.name}</span>
              {/* <span className={s.cost}>{product.cost}$</span> */}
              <button type="submit" className={s.button}>
                Edit
              </button>
              <button type="submit" className={s.buttonDelete}>
                Delete
              </button>
            </li>
          ))
        ) : (
          <h1>No results found!</h1>
        )}
      </div>
    </div>
  );
}

export default App;
