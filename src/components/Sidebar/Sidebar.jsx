import React, { useState } from "react";
import Logo from "../../imgs/logo.png";
import { SidebarData } from "../../data/Data";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import "./Sidebar.css";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="side-bar">
      {/* Logo */}
      <div className="logo">
        <img src={Logo} alt="" />
        <span>
          Sh<span>o</span>ps
        </span>
      </div>

      {/* Menu */}
      <div className="menu">
        {SidebarData.map((item, index) => (
          <div
            key={index}
            className={selected === index ? "menu-item active" : "menu-item"}
            onClick={() => setSelected(index)}
          >
            <item.icon />
            <span>{item.heading}</span>
          </div>
        ))}
        {/* signoutIcon */}
        <div className="menu-item">
          <UilSignOutAlt />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
