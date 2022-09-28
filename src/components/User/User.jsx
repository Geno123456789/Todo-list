import React from 'react';
import s from './User.module.css';
import userIcon from '../../img/icon-user.png'

function User({ value, updateUsername, onCkickSave }) {

  function handlerChange(e) {
    updateUsername(e.target.value);
  }

  return (
    <div className={s.userContainer}>
      <img src={userIcon} alt="user icon" />
      <input className={s.username} type='text' placeholder='Username' onChange={(e) => handlerChange(e)} value={value} />
      <button onClick={onCkickSave}>Save</button>
    </div>
  )
}

export default User