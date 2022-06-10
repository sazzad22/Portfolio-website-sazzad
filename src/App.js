import logo from './logo.svg';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import SmNav from './components/SmNav/SmNav';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className=''>
      <SmNav></SmNav>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
          
        
        

      </Routes>
    </div>
  );
}

export default App;
