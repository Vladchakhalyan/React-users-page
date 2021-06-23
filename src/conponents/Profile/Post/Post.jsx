import React from "react";
import p from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={p.post} id={props.id}>
      <div className={p.item}>
        <img src={props.img} />
        {props.msg}
        <div>
          <span>
            <b>{props.like}</b>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Post;
