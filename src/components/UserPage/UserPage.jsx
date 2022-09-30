import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userIcon from '../../img/icon-user.png';
import s from './UserPage.module.css';

function UserPage() {
   const [username, setUsername] = useState('');
   const navigate = useNavigate();
  
    const onCkickSave = () => {
        if(username.trim()){
            navigate('/todos')
        }
    }
    function handlerChange(e) {
        setUsername(e.target.value);
      }
  return (
    <div className={s.userContainer}>
    <img src={userIcon} alt="user icon" />
    <input className={s.username} type='text' placeholder='Username' onChange={(e) => handlerChange(e)} value={username} />
    <button onClick={onCkickSave}>Save</button>
  </div>
  )
}

export default UserPage