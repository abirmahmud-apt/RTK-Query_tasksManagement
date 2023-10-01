import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import AddTask from './pages/AddTask';
import EditTask from './pages/EditTask';
import Home from './pages/Home';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<AddTask/>}/>
        <Route path='/edit/:id' element={<EditTask/>}/>
      </Routes>
    </Router>
  );
}

export default App;
