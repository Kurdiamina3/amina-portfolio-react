import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import { Link } from "react-scroll";
function Nav() {
  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="heart">💖</span> Amina Kurdi
        </a>
      </h2>
      <nav className="navbar">
        <ul className="flex-row">
          <li className="nav-item nav-text">
          <Link 
          to="/about"
          className="nav-link"
          activeClass="active"
          >ABOUT ME</Link>
          </li>
          <li className="nav-item navbar-text">
              <Link 
              to="/project"
              className="nav-link"
              activeClass="active">PROJECT</Link>
          </li>
          <li className="nav-item navbar-text">
            <Link
              to="/resume"
              className="nav-link"
              activeClass="active"
            >
              RESUME
            </Link>
          </li>
          <li className="nav-item navbar-text">
            <Link
              to="/contact"
              className="nav-link"
              activeClass="active"
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav;