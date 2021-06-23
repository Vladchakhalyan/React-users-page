import React from "react";
import n from "./Nav.module.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className={n.item}>
        <div>
          <NavLink to="/profile" activeClassName={n.active}>
            {" "}
            <b> Profile</b>
          </NavLink>
        </div>
        <div className={n.itema}>
          <NavLink to="/dialog" activeClassName={n.active}>
            <b> Massages</b>
          </NavLink>
        </div>
        <div className={n.itema2}>
          <NavLink to="/users" activeClassName={n.active}>
            <b> Users</b>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
