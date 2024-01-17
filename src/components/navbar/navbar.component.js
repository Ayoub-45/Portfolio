import React, { useState } from "react";
import Logo from "../logo/logo.component";
import { Link } from "react-router-dom";
import data from "../../data/data.json";
import { HiX } from "react-icons/hi";
import { FaBars } from "react-icons/fa";

import "./navbar.styles.css";
export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle((prevState) => !prevState);
  };
  return (
    <div>
      <div className="navbar">
        <div className="navbar-container">
          <div>
            <Link to={"/"}>
              <Logo />
            </Link>
          </div>
          <div>
            {
              <ul
                className={`${
                  !toggle ? "active" : "inactive"
                } navbar-container-menu active `}
              >
                {data.map((item) => (
                  <Link key={item.label} to={item.to} className="navbar-item">
                    <li>{item.label}</li>
                  </Link>
                ))}
              </ul>
            }
          </div>
          <div className="nav-icon" onClick={handleClick}>
            {toggle ? <HiX size={30} /> : <FaBars size={30} />}
          </div>
        </div>
      </div>
    </div>
  );
}
