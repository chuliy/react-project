import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import ListPage from './components/ListPage/ListPage';
import EditPage from './components/EditPage/EditPage';

import CreatePage from './components/CreatePage/CreatePage';

function App() {
  return (
    <div>
      <div className="logo">Logo</div>
      <div>
        <div className="link-element">
          <Link to="/" className="links">
            List Page
          </Link>
        </div>
        <div className="link-element">
          <Link to="/manageitems" className="links">
            Manage Items
          </Link>
        </div>
        <div className='link-element'>
          <Link to='/createitems' className='links'>Create Items</Link>
        </div>
      </div>
      <Routes>
        <Route path='/' element={<ListPage/>}/>
        <Route path='/manageitems' element={<EditPage/>}/>
        <Route path='/createitems' element={<CreatePage/>}/>

      </Routes>
    </div>
  );
}

export default App;
