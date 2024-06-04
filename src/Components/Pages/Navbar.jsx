import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../CSS/Navbar.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
      Welcome to HCAI Project Page
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/motivation">Motivation</NavLink>
        </li>
        <li>
          <NavLink to="/Contact">Team information</NavLink>
        </li>
        <li>
          <NavLink to="/Bias_analysis">Bias Analysis</NavLink>
        </li>
        <li>
          <NavLink to="/Survey_results">Survey Results</NavLink>
        </li>
        <li>
          <NavLink to="/Final_results">Final Results</NavLink>
        </li>
      </ul>
    </nav>
  );
};