import logo from './logo.svg';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import SmNav from './components/SmNav/SmNav';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className=''>
      <SmNav></SmNav>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
          
        
        

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
