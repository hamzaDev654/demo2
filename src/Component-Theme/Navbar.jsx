import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "./Theme-context";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  console.log(theme);
  return (
    <nav className="navbar">
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </div>
      <div className="mode-swicth">
        <label>
          <input
            type="checkbox"
            onChange={toggleTheme}
            checked={theme === "dark"}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </nav>
  );
};

export default Navbar;