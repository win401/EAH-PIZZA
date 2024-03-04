// Layout.js
import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../styles/Layout.css";

const Layout = () => {
  return (
    <>
      <nav>
        <p>Everyday’s another holiday</p>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Menu">Menu</Link>
          </li>
          <li>
            <Link to="/Location">Location</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
