import React, { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import "../styles/Layout.css";

const Layout = () => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState("Home");

  useEffect(() => {
    // 초기에 활성화된 메뉴 설정
    if (location.pathname === "/") {
      setActiveMenu("Home");
    } else if (location.pathname === "/Menu") {
      setActiveMenu("Menu");
    } else if (location.pathname === "/Location") {
      setActiveMenu("Location");
    } else if (location.pathname === "/Contact") {
      setActiveMenu("Contact");
    }
  }, [location.pathname]);

  return (
    <>
      <nav>
        <p>Everyday’s another holiday</p>
        <ul>
          <li className={`myElement ${activeMenu === "Home" ? "active" : ""}`}>
            <Link to="/" onClick={() => setActiveMenu("Home")}>
              Home
            </Link>
          </li>
          <li className={`myElement ${activeMenu === "Menu" ? "active" : ""}`}>
            <Link to="/Menu" onClick={() => setActiveMenu("Menu")}>
              Menu
            </Link>
          </li>
          <li className={`myElement ${activeMenu === "Location" ? "active" : ""}`}>
            <Link to="/Location" onClick={() => setActiveMenu("Location")}>
              Location
            </Link>
          </li>
          <li className={`myElement ${activeMenu === "Contact" ? "active" : ""}`}>
            <Link to="/Contact" onClick={() => setActiveMenu("Contact")}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
