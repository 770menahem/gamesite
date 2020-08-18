import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="nav">
      <Link className="logo" to="/">
        MYL
      </Link>
      <Link className="weather" to="weather">
        Weather
      </Link>
    </nav>
  );
}
