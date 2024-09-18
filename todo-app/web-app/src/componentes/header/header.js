import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header>
      <h1>Administración de tareas</h1>
      <hr />
      <div className="links">
        <NavLink to="/add" className="link" activeClassName="active">
          Agregar tarea
        </NavLink>
      </div>
    </header>
  );
};

export default Header;