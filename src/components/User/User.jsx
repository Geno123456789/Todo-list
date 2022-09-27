import React from 'react'

function User({value, updateUsername, onCkickSave}) {

  function handlerChange(e) {
    updateUsername(e.target.value);
}

  return (
    <div>
      <label>
        Username:
        <input type='text' placeholder='Username' onChange={(e) => handlerChange(e)} value={value} />
      </label>
      <button onClick={onCkickSave}>Save</button>
    </div>
  )
}

export default User