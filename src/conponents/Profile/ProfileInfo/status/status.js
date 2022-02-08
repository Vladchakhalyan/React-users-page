import React, { useState, useEffect } from 'react';
import s from '../ProfileInfo.module.css';
import m from '../ProfileInfo.module.css';

export const Status = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const statusOnchange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <>
      <h2 className={s.itemP}>
        <b>STATUS</b>
      </h2>
      {!editMode && (
        <div onDoubleClick={activateEditMode}>
          <p>
            <b>{props.status || '----'}</b>
          </p>
          <button className={m.button}>
            <b>change status</b>
          </button>
        </div>
      )}
      {editMode && (
        <div>
          <input
            autoFocus={true}
            onBlur={deactivateEditMode}
            value={status}
            onChange={statusOnchange}
          />
          <span className={s.statusSpan}>
            <i className='fas fa-check'></i>
          </span>
        </div>
      )}
    </>
  );
};
