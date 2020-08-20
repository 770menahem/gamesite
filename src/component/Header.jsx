import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [logo, setLogo] = useState({ name: "", to: "" });
  const [tabs, setTabs] = useState([{ name: "", to: "" }]);

  useEffect(() => {
    setLogo({ name: "MYL", to: "/" });
    setTabs([
      { name: "Games", to: "games" },
      { name: "Weather", to: "weather" },
    ]);
  }, []);

  return (
    <nav className="nav">
      <Link className="logo" to={logo.to}>
        {logo.name}
      </Link>
      {tabs.map((tab) => (
        <Link key={tab.name} className={`nav-item ${tab.name}`} to={tab.to}>
          {tab.name}
        </Link>
      ))}
    </nav>
  );
}
