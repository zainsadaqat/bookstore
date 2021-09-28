import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <h1>Redux BookStore</h1>
      <nav>
        <ul className="nav">
          <li className="nav-item">
            <Link to="/">Books</Link>
          </li>
          <li className="nav-item">
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
