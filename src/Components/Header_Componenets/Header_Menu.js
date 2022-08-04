import React, { useState } from "react";
import Menu_icon from "../../images/icon-menu.svg";
import Close_icon from "../../images/icon-close.svg";
export default function HeaderMenu() {
  const [icon, setIcon] = useState(true);
  function Change_icon() {
    setIcon(!icon);
  }
  return (
    <div className="Header_Menu_Container">
      <img
        src={icon ? Menu_icon : Close_icon}
        alt="Menu_Icon"
        onClick={Change_icon}
      />
      <div
        className="Header_Menu_AllText"
        style={icon ? { "z-index": "-1", 'background' : 'transparent'} : { "z-index": "2" , 'background' : 'rgba(0, 0, 0, 0.149)'}}
      >
        <div
          className="Header_Menu_Text"
          style={icon ? { left: "-376px" } : { left: "-0px" }}
        >
          <div>
            <h4>Collections</h4>
            <h4>Men</h4>
            <h4>Women</h4>
            <h4>About</h4>
            <h4>Contact</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
