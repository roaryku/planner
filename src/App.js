
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import List from './list/List';
import Meal from './meal/Meal';

function App() {

  return <Router>
    <nav className="nav">
      <Link className='listNav' to='/'>Home</Link>
      <Link className='listNav' to='/list/List'>Task Planner</Link>
      <Link className='listNav' to='/meal/Meal'>Meal Planner</Link>
    </nav>

    <Routes>
       <Route path='/' element = {<Home/>} />
       <Route path='/list/List' element = {<List/>} />
       <Route path='/meal/Meal' element = {<Meal/>} />

    </Routes>
    </Router>
  
}

export default App;
