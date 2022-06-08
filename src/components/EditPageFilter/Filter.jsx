// import React, { useState, useEffect } from 'react';
// import s from './EditPageFilter.module.css';
// import { v4 as uuidv4 } from 'uuid';
// import { getItems } from '../../serverqueries';
// // import { Items } from '../ListPage/Items/Items';
// // This holds a list of some fiction products
// // Some  have the same name but different cost and id
// const PRODUCTS = [
//   { id: uuidv4(), categoryId: 1, name: 'Einaudi', cost: 500 },
//   { id: uuidv4(), categoryId: 2, name: 'Brahms', cost: 600 },
//   { id: uuidv4(), categoryId: 3, name: 'Tom Henk', cost: 700 },
//   { id: uuidv4(), categoryId: 4, name: 'Tom Handric', cost: 800 },
// ];

// function App() {
//   // the value of the search field
//   const [name, setName] = useState('');

//   // the search result
//   const [foundProducts, setFoundProducts] = useState(PRODUCTS);

//   const filter = e => {
//     const keyword = e.target.value;

//     if (keyword !== '') {
//       const results = PRODUCTS.filter(product => {
//         return product.name.toLowerCase().startsWith(keyword.toLowerCase());
//         // Use the toLowerCase() method to make it case-insensitive
//       });
//       setFoundProducts(results);
//     } else {
//       setFoundProducts(PRODUCTS);
//       // If the text field is empty, show all products
//     }

//     setName(keyword);
//   };
//   useEffect(() => {
//     getItems().then(console.log('good'));
//   });
//   const deletePosition = id => {
//     setFoundProducts(foundProducts.filter(product => product.id !== id));
//     console.log('click on delete');
//   };

//   return (
//     <div className={s.container}>
//       <input
//         type="search"
//         value={name}
//         onChange={filter}
//         className={s.input}
//         placeholder="Search by name"
//       />
//       <div className={s.list}>
//         {foundProducts && foundProducts.length > 0 ? (
//           foundProducts.map(product => (
//             <li key={product.id} className={s.product}>
//               <span className={s.id}>{product.categoryId}</span>
//               <span className={s.name}>{product.name}</span>
//               {/* <span className={s.cost}>{product.cost}$</span> */}
//               <button type="submit" className={s.button}>
//                 Edit
//               </button>
//               <button
//                 type="submit"
//                 className={s.buttonDelete}
//                 value={name}
//                 onClick={() => deletePosition(product.id)}
//               >
//                 Delete
//               </button>
//             </li>
//           ))
//         ) : (
//           <h1>No results found!</h1>
//         )}
//       </div>
//       {/* <Items /> ; */}
//     </div>
//   );
// }

// export default App;