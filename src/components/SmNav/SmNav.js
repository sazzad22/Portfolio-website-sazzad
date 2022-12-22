import React from 'react';
import { Link } from 'react-router-dom';
import { faHome, faUser, faEnvelope, faSuitcase } from '@fortawesome/free-solid-svg-icons'


const SmNav = () => {
    return (
      <div class="navbar bg-transparent border-yellow-400 hover:bg-gray-700 ease-in-out duration-200  border">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li className=''><Link to={'/'} >Home</Link></li>
            
            <li><Link to={'/contact'} >Contact Me</Link></li>
            <li><Link to={'/aboutme'} >About Me</Link></li>
            <li><Link to={'/blogs'} >Blogs</Link></li>
          </ul>
        </div>
        {/* <a class="btn btn-ghost normal-case text-xl">daisyUI</a> */}
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
          <li className='text-xl font-bold text-secondary text-secondary hover:text-gray-900'><Link to={'/'} >Home</Link></li>
          
          <li className='text-xl font-bold text-secondary text-secondary hover:text-gray-900'><Link to={'/contact'} >Contact Me</Link></li>
          <li className='text-xl font-bold text-secondary text-secondary hover:text-gray-900'><Link to={'/aboutme'} >About Me</Link></li>
          <li className='text-xl font-bold text-secondary text-secondary hover:text-gray-900'><Link to={'/blogs'} >Blogs</Link></li>
        </ul>
      </div>
      <div class="navbar-end">
        {/* <a class="btn">Get started</a> */}
      </div>
    </div>
    );
};

export default SmNav;