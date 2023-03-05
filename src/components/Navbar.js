import React from 'react';
import "../assets/css/navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar2">
      <Link to="/"> Home </Link> | <Link to="/favoritos"> Favoritos </Link>
    </nav>
  );
}
