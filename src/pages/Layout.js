import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import "../styles/Layout.css";

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <nav>
        <p>Everyday’s another holiday</p>
        <ul>
          <li className={`myElement ${location.pathname === "/" ? "active" : ""}`}>
            <Link to="/">Home</Link>
          </li>
          <li className={`myElement ${location.pathname === "/Menu" ? "active" : ""}`}>
            <Link to="/Menu">Menu</Link>
          </li>
          <li className={`myElement ${location.pathname === "/Location" ? "active" : ""}`}>
            <Link to="/Location">Location</Link>
          </li>
          <li className={`myElement ${location.pathname === "/Contact" ? "active" : ""}`}>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
