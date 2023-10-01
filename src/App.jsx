import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import AddTask from './pages/AddTask';
import EditTask from './pages/EditTask';
import Home from './pages/Home';
import { useState } from 'react';
function App() {
  const [search, setSearch] = useState('')
  return (
    <Router>
      <Navbar search={search} setSearch={setSearch}/>
      <Routes>
        <Route path='/' element={<Home search={search}/>}/>
        <Route path='/add' element={<AddTask/>}/>
        <Route path='/edit/:id' element={<EditTask/>}/>
      </Routes>
    </Router>
  );
}

export default App;
