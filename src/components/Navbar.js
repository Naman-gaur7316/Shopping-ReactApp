import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../sass/main.css";
import logo from '../images/shopping-cart.png';

const Navbar = () => {

    const { pathname } = useLocation();

  return (
    <header className="header">
      <nav className="header__nav">
        <div className="logo">
            <img src={logo} alt="shopping-logo" />
        </div>
        <ul className="header__nav-list">
          <li>
            <Link to="/" className={`${pathname === "/" ? 'active' : ''}`} >Home</Link>
          </li>
          <li>
            <Link to="/favourite" className={`${pathname === "/favourite" ? 'active' : ''}`} >Favourites</Link>
          </li>
          <li>
            <Link to="/cart" className={`${pathname === "/cart" ? 'active' : ''}`} >Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
