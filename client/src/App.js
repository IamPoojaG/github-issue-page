import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Home';
import CreateIssue from './components/CreateIssue';
import OpenedIssue from './components/OpenedIssue';
import ClosedIssue from './components/ClosedIssue';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <nav className='navbar bg-body-tertiary'>
          <div className='container-fluid'>
            <Link className='btn btn-secondary ' to='/'>
              Github issues
            </Link>
            <Link to='/add' className='btn btn-secondary '>
              Create new issue
            </Link>
          </div>
        </nav>
        <br />
        <Routes>
          <Route path='/' exact element={<Home />} />{' '}
          <Route path='/add' element={<CreateIssue />} />{' '}
          <Route path='/opened' element={<OpenedIssue />} />{' '}
          <Route path='/closed' element={<ClosedIssue />} />{' '}
        </Routes>
      </Router>
    </>
  );
}

export default App;
