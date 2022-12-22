import logo from './logo.svg';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import SmNav from './components/SmNav/SmNav';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ProjectDetails from './components/ProjectDetails/ProjectDetails';
import AboutMe from './components/AboutMe/AboutMe';
import Blogs from './components/Blogs/Blogs';

function App() {
  return (
    <div className=''>
      <SmNav></SmNav>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/projectdetails/:id' element={<ProjectDetails></ProjectDetails>}></Route>
        <Route path='/aboutme' element={<AboutMe></AboutMe>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          
        
        

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
