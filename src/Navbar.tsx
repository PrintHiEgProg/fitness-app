import React from "react";
import "./App.css";

function Navbar() {
  return (
    <div className="Navbar">
      <nav className="navbar">
        <div className="navbar-item">
          <div className="navbar-icon-helper trainings-navbar-icon"></div>
          <p className="navbar-description">Тренировки</p>
        </div>
        <div className="navbar-item">
          <div className="navbar-icon-helper more-navbar-icon"></div>
          <p className="navbar-description">Ещё</p>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
