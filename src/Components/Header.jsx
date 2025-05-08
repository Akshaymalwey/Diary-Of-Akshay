import React from "react";
import src from "../assets/header-img.jpeg";

const Header = () => {
  return (
    <div className="header-section">
      <ul className="header-ul">
        <li>
          <img src={src} alt="" className="header-img" />
        </li>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Posts</a>
        </li>
        <li>
          <a href="">Socials</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
