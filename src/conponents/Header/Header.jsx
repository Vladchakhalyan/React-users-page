import React from "react";
import h from "./Header.module.css";
import { NavLink } from "react-router-dom";

let Header = (props) => {
  return (
    <header>
      <div className={h.item}>
        <p className={h.itemP}>
          <b>
            REACT.JS
            <br /> STUDENT
          </b>
        </p>
        <p className={h.log}>
          {props.isAuth ? (
            <div>
              <b>{props.login}</b>
              <span onClick={props.Loginauth}>
                <b>log out</b>
              </span>
            </div>
          ) : (
            <NavLink to={"/login"}>
              <b> login</b>
            </NavLink>
          )}
        </p>
      </div>
    </header>
  );
};

export default Header;
