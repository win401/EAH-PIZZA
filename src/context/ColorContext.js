// // ColorContext.js
// import { createContext, useContext, useState } from "react";

// const ColorContext = createContext();

// export const ColorProvider = ({ children }) => {
//   const [navColor, setNavColor] = useState("white");
//   const [navAfterColor, setNavAfterColor] = useState("white");

//   const changeNavColor = (newColor) => {
//     setNavColor(newColor);
//   };

//   const changeNavAfterColor = (newColor) => {
//     setNavAfterColor(newColor);
//   };

//   return <ColorContext.Provider value={{ navColor, changeNavColor, navAfterColor, changeNavAfterColor }}>{children}</ColorContext.Provider>;
// };

// export const useColor = () => {
//   return useContext(ColorContext);
// };
