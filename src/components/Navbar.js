import React from "react";
import { Link, NavLink } from "react-router-dom";
export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}{""}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                style={({isActive})=>{return{
                  backgroundColor: isActive ? "yellowgreen" : "",
                  borderRadius: isActive ? "10px" : ""
                }}}
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link"  style={({isActive})=>{return{
                  backgroundColor: isActive ? "yellowgreen" : "",
                  borderRadius: isActive ? "10px" : ""
                }}} to="/About">
                {props.about}
              </NavLink>
            </li>
          </ul>
          <div
            className={`form-check form-switch text-${
              props.mode === "dark" ? "light" : "dark"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              onClick={props.toggleMode}
              role="switch"
              id="flexSwitchCheckDefault"
              aria-checked="true"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}