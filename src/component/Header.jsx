import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [logo, setLogo] = useState({ name: "", to: "" });
  const [tabs, setTabs] = useState([{ name: "", to: "" }]);

  useEffect(() => {
    setLogo({ name: "MYL", to: "/" });
    setTabs([
      { name: "Games", to: "games" },
      {
        name: (
          <svg className="Weather" viewBox="0 0 16 16">
            <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
          </svg>
        ),
        to: "weather",
      },
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
