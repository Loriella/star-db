import React from 'react';
import './header.css';
import {Link} from 'react-router-dom';

const Header = ({onServiceChange}) => {
  return (
    <div className="header d-flex">
      <h3>
        <Link to="/">
          StarDB
        </Link>
      </h3>
      <ul className="d-flex">
        <li>
          <Link to="/people">People</Link>
        </li>
        <li>
          <Link to="/planets">Planets</Link>
        </li>
        <li>
          <Link to="/starships">Starships</Link>
        </li>
      </ul>

      <button
        className="btn btn-primary btn-sm"
        onClick={onServiceChange}>
        Change Service
      </button>
    </div>
  );
};

export default Header;