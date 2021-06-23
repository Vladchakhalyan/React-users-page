import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";
import s from "./Profile.module.css";
import MyPagePost from "./MyPosts/MyPagePost";

const Profile = (props) => {
  return (
    <div className={s.content}>
      <div className={s.item}>
        <div>
          <h1>
            <b> PROFILE PAGE</b>
          </h1>
          <div className={s.item2}>
            <ProfileInfo
              profile={props.profile}
              status={props.status}
              updateStatus={props.updateStatus}
            />
            <MyPagePost />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
