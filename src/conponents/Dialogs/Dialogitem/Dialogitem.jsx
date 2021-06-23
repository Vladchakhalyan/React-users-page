import React from 'react';
import d from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const Dialogitem = (props) => {
  let paf = '/dialog/' + props.id;
  return (
    <div className={d.dialog}>
      <NavLink to={paf}>{props.name}</NavLink>
    </div>
  );
};

export default Dialogitem;
