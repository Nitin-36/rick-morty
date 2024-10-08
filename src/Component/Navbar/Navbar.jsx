import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../../App.css"
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container">
        <Link to="/" className="fs-3 ubuntu navbar-brand">
          Rick & Morty <span className="text-primary">WiKi</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <style>
            {`
                       button[aria-expanded="false"] >.close{
                       display:none;}
                       button[aria-expanded="true"] >.open{
                       display:none;}
                `}
          </style>
          <i className="fa-solid fa-bars open fw-bold text-dark"></i>
          <i className="fa-solid fa-xmark close fw-bold  text-dark"></i>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav ">
            <NavLink activeClassName="active" to="/" className="nav-link">
              Character
            </NavLink>
            <NavLink to="episode" className="nav-link">
              Episodes
            </NavLink>
            <NavLink to="location" className="nav-link">
              Location
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
