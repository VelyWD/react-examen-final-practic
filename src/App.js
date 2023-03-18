import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Users from './Pages/Users';

function App() {
  return (
    <Routes>
      <Route exact path='/' Component={Home}/>
      <Route path='/users' Component={Users}/>
    </Routes>
  );
}

export default App;
