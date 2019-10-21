import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const activeStyle = {
  color: 'palevioletred',
};

const Navigation = () => (
  <ul className={css.navigation}>
    <li>
      <NavLink to="/" exact activeStyle={activeStyle}>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to="/reader" activeStyle={activeStyle}>
        Reader
      </NavLink>
    </li>
    <li>
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
    </li>
  </ul>
);

export default Navigation;
