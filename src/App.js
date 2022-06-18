import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import ListPage from './components/ListPage/ListPage';
import EditPageFilter from './components/EditPageFilter/EditPageFilter';
import CreatePage from './components/CreatePage/CreatePage';

function App() {
  return (
    <div>
      <div className="logo">Logo</div>
      <div>
        <div className="link-element" data-cy="list-page">
          <Link to="/" className="links">
            List Page
          </Link>
        </div>
        <div className="link-element">
          <Link to="/manageitems" className="links" data-cy="edit-page">
            Manage Items
          </Link>
        </div>
        <div className="link-element">
          <Link to="/createitems" className="links" data-cy="create-page">
            Create Items
          </Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/manageitems" element={<EditPageFilter />} />
        <Route path="/createitems" element={<CreatePage />} />
      </Routes>
    </div>
  );
}

export default App;
