import React from 'react';
import d from './Message.module.css';

const Message = (props) => {
  return <div className={d.msg}>{props.name}</div>;
};

export default Message;
