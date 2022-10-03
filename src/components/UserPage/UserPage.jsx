import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    <input className={s.username} type='text' placeholder='Username' onChange={(e) => handlerChange(e)} value={username} />
    <button onClick={onCkickSave}>Save</button>
  </div>
  )
}

export default UserPage