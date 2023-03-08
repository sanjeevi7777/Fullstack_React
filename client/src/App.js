import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Main from './components/Main';
import Delete from './components/Delete';
import Find from './components/Find';
import FindById from './components/FindById'
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Update } from '@mui/icons-material';
import Update from './components/update'
// import { Delete } from 'react-axios';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path='/Main' element={<Main/>}/>
          <Route path='/' element={<Main />} />
        <Route path='Login' element={<Login/>}/>
        {/* <Route/> */}
          <Route path='Find' element={<Find />} />
          <Route path='FindById' element={<FindById />} />
          <Route path='Delete' element={<Delete />} />
          <Route path='Update' element={<Update />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
