import React from "react";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className={`${style.navbar_container}`}>
      <div>WorldCoderMaster</div>
      <div className={style.controlTroggle}>
        <ul className={style.nav_menu}>
          <li>
            <Link to="/" className={`${style.linkListItem}`}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/service" className={`${style.linkListItem}`}>
              SERVICE
            </Link>
          </li>
          <li>
            <Link to="/development" className={`${style.linkListItem}`}>
              DEVELOPMENT
            </Link>
          </li>
          <li>
            <Link to="/about" className={`${style.linkListItem}`}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/contact" className={`${style.linkListItem}`}>
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
