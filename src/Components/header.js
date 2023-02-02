import { NavLink} from 'react-router-dom'
import React from 'react';
const Header =()=>(
  <header>
    <h1> Expensify</h1>
    <NavLink to="/" activeClassName='is-active' exact={true}> Go Home</NavLink>
    <NavLink to="/create" activeClassName='is-active'>create page</NavLink>
    <NavLink to="/edit" activeClassName='is-active'> Click here</NavLink>
    <NavLink to="help" activeClassName='is-active'>Help</NavLink>
  </header>
);

export default Header;