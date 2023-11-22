import React, { useState } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiCart } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const NavBar = ({count}) => {
  const [click, setClick] = useState(false);
  

  const handleClick = () => setClick(!click);

  return (
    <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <h2>Shopee</h2>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/products"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="login-cart">
          <p><NavLink to="/login"   exact
                activeClassName="active"
                className="nav-links"
                >Login</NavLink></p>
                <p>
                <NavLink to="/cartlist"   exact
                activeClassName="active"
                className="nav-links"
               >
                      <BiCart size={25}/><sup>{count}</sup>
                </NavLink>
                  
              </p>
          </div>
          
          <div className="nav-icon" onClick={handleClick}>
         

            {click ? (
              <span className="icon">
                < AiOutlineClose size={20}/>
              </span>
            ) : (
              <span className="icon">
                <GiHamburgerMenu size={20}/>
              </span>
            )}
          </div>
        </div>
      </nav>
  );
};

export default NavBar;
