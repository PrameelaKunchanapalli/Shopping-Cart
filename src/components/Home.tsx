// src/pages/Home.tsx
import React from "react";
import { Link } from "react-router-dom";
import "./styles/home.css";

export default function Home() {
  return (
    <div className="home-page-container">
      <div className="welcome-section">
        <h1 className="welcome">Welcome to More Fashions</h1>
        <p className="description">Click below to browse all our awesome collections.</p>
      </div>

      <div className="button-section">
        <Link className="browse-button" to="/shop">
          Browse Our Products
        </Link>
      </div>
    </div>
  );
}
