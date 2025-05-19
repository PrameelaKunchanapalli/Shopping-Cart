// src/components/Navbar.tsx
import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">More Fashions</h1>
      <div className="nav-links">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/shop">
          Shop
        </NavLink>
        <NavLink className="nav-link" to="/cart">
          Cart
        </NavLink>
      </div>
    </nav>
  );
}
