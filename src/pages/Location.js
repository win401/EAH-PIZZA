import React from "react";
import KakaoMap from "../components/KakaoMap";

import "../styles/Location.css";

const Location = () => {
  return (
    <div className="location_wrap">
      <h1>Location</h1>
      <KakaoMap />
    </div>
  );
};

export default Location;
