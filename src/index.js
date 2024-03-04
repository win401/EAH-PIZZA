import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Location from "./pages/Location";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 기본 경로에 대한 라우트 추가 */}
        <Route path="/" element={<Home />} />

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Menu" element={<Menu />} />
          <Route path="Location" element={<Location />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
