import React from "react";
import n from "./Users.module.css";
import userPhoto from "../../image/down2.jpg";
import { NavLink } from "react-router-dom";

let Users = (props) => {
  let num = Math.ceil(props.totalUsersCount / props.pageSize);

  let users = [];
  for (let i = 1; i <= num; i++) {
    users.push(i);
  }

  return (
    <div className={n.users}>
      <div className={n.item}>
        {users.map((p) => {
          return (
            <span
              className={props.CurrentPage === p && n.ba}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              <b>{p}</b>
            </span>
          );
        })}
        <div className={n.item2}>
          {props.users.map((b) => {
            return (
              <div key={b.id} className={n.item3}>
                <NavLink to={/profile/ + b.id}>
                  <img
                    src={b.photos.small != null ? b.photos.small : userPhoto}
                  />
                  <button className={n.button}>
                    <b>view profile</b>
                  </button>
                </NavLink>

                <p>
                  <b>{b.name}</b>
                </p>
                <p>
                  <b>{b.status}</b>
                </p>
                <p>
                  <b>{"b.location.city"}</b>
                </p>
                <p>
                  <b>{"b.location.country"}</b>
                </p>
                {b.followed ? (
                  <button
                    className={n.button}
                    disabled={props.nkisFLUN.some((id) => id === b.id)}
                    onClick={() => {
                      props.isFLUN(true, b.id);
                      props.Usersunfolow(b.id);
                    }}
                  >
                    unfolow
                  </button>
                ) : (
                  <button
                    className={n.button}
                    disabled={props.nkisFLUN.some((id) => id === b.id)}
                    onClick={() => {
                      props.isFLUN(true, b.id);
                      props.Usersfolow(b.id);
                    }}
                  >
                    follow
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Users;
