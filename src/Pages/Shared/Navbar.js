import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {

  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };

    const menuItems = <>
    <li>
     <Link to="/">HOME</Link>
   </li>
   <li>
     <Link to="/shop">SHOP</Link>
   </li>
   <li>
     <Link to="/about">ABOUT</Link>
   </li>
   <li>
     <Link to="/contact">CONTACT US</Link>
   </li>
   <li>
     <Link to="/blogs">BLOGS</Link>
   </li>
   <li>
     {
       user? <>
       <button onClick={logout} className='btn btn-link font-bold text-secondary no-underline'> <span className='uppercase text-primary'>{user.displayName}</span> SIGNOUT</button>
       </> :<Link className='text-secondary' to="/login">LOGIN</Link>
     }
   </li>
</>


    return (
        <div className="navbar container mx-auto bg-base-100 font-semibold">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
           {menuItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case font-extrabold text-3xl">
          iParts
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
        {menuItems}
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/" className="btn btn-secondary">
          Get started
        </Link>
      </div>
    </div>
    );
};

export default Navbar;