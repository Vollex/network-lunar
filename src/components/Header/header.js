import React from "react";
import "../Header/header.css";

const Header = () => {
  return (
    <div className="Header">
      <p className="Title">Lunar</p>
      <div className="buttonLeft">
        <a className="headerButton">Start a thread</a>
      </div>
    </div>
  );
};

export default Header;
