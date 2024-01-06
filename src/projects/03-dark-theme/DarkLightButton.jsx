import React, { useContext } from "react";
import "./DarkLightButton.css";
import { ThemeContext } from "./context/theme-context";

export default function DarkLightButton() {
  const { theme, changeTheme } = useContext(ThemeContext);
  return (
    <div className="container">
      <button
        type="button"
        className={`btn my-btn ${theme === "dark" && "text-white  "}`}
        onClick={changeTheme}
      >
        {theme === "dark" ? "Light" : "Dark"}
      </button>
    </div>
  );
}
