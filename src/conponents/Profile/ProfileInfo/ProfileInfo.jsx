import React from "react";
import Preloader from "../../common/Prealoader/Preloader";
import { Status } from "./status/status";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={s.item2}>
      {/*<div className="image">*/}
      {/*  <img src={image} alt="" />*/}
      {/*</div>*/}
      <img src={props.profile.photos.large} />
      <h2 className={s.itemP}>
        <b>Name</b>
      </h2>
      <p>{props.profile.aboutMe}</p>
      <b>
        <p>{props.profile.fullName}</p>
      </b>
      <Status status={props.status} updateStatus={props.updateStatus} />
    </div>
  );
};

export default ProfileInfo;
