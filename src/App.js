import s from './App.module.css';
import { Routes, Route, Link } from 'react-router-dom';
import ListPage from './components/ListPage/ListPage';
import EditPageFilter from './components/EditPageFilter/EditPageFilter';
import CreatePage from './components/CreatePage/CreatePage';
import { Modal } from './components/ModalWindow/Modal';
import { useState } from 'react';

function App() {
  const [modalState, setModalState] = useState({
    showModal: false,
    itemData: { name: null, category: null, cost: null },
  });

  // state data structure:
  // state = {
  //   showModal: boolean,
  //   itemData: {
  //     name: item_name,
  //     category: item_categoryId,
  //     cost: item_cost
  //   }
  // }

  function modalStateHandler(statePar) {
    setModalState(statePar);
  }

  return (
    <div>
      <Modal modalState={modalState} modalStateHandler={modalStateHandler} />
      <div className={s.logo}>
        <div className={s.header}>
          <div className={s.link} data-cy="list-page">
            <Link to="/" className={s.links}>
              List Page
            </Link>
          </div>
          <div className={s.link}>
            <Link to="/manageitems" className={s.links} data-cy="edit-page">
              Manage Items
            </Link>
          </div>
          <div className={s.link}>
            <Link to="/createitems" className={s.links} data-cy="create-page">
              Create Items
            </Link>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route
          path="/manageitems"
          element={
            <EditPageFilter
              modalState={modalState}
              modalStateHandler={modalStateHandler}
            />
          }
        />
        <Route path="/createitems" element={<CreatePage />} />
      </Routes>
    </div>
  );
}

export default App;
