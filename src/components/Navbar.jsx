import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";

const Navbar = ({ productNum }) => {
  const [show, setShow] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container position-relative fs-2">
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "red" : "black",
              fontWeight: isActive ? 700 : "500",
              transition: "all 1s",
            };
          }}
          className="navbar-brand fs-2"
          to="/"
        >
          Home
        </NavLink>

        <button
          className="navbar-toggler"
          onClick={() => {
            setShow(!show);
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={
            show
              ? "collapse navbar-collapse"
              : "collapse navbar-collapse active"
          }
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink
                style={({ isActive }) => {
                  return {
                    color: isActive ? "red" : "black",
                    fontWeight: isActive ? 700 : "500",
                    transition: "all 1s",
                  };
                }}
                className="nav-link"
                to="/products"
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                style={({ isActive }) => {
                  return {
                    color: isActive ? "red" : "black",
                    fontWeight: isActive ? 700 : "500",
                    transition: "all 1s",
                  };
                }}
                className="nav-link"
                to="/about"
              >
                About us
              </NavLink>
            </li>
            <li className="nav-item navbar-rel">
              <NavLink
                style={({ isActive }) => {
                  return {
                    color: isActive ? "red" : "black",
                    fontWeight: isActive ? 700 : "500",
                    right: 0,
                    transition: "all 1s",
                  };
                }}
                className="nav-link position-absolute navCart"
                to="/cart"
              >
                <BsCart2 className="position-relative" />
                <span
                  className="position-absolute"
                  style={{
                    top: "10px",
                    right: "0",
                    background: "red",
                    color: "white",
                    paddingInline: "8px",
                    borderRadius: "50%",
                    fontSize: "20px",
                  }}
                >
                  {productNum}
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
