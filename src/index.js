import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Location from "./pages/Location";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/eah-pizza" element={<Home />} />
          <Route path="Menu" element={<Menu />} />
          <Route path="Location" element={<Location />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="/*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
