
import { useState } from 'react';
import './App.css';
import User from './components/User/User';

function App() {
  const [toggleIsCompleted, setToggleIsCompleted] = useState(false);
  const [username, setUsername] = useState('');
 
 const updateUsername = (value) => {
    setUsername(value)
 }
  const onCkickSave = () => {
      if(username.trim()){
        setToggleIsCompleted(true);
      }
  }
  return (
    <div className="App">
        { !toggleIsCompleted ? <User value={username} updateUsername={updateUsername} onCkickSave={onCkickSave} /> : <div>Todo list</div> }
        
    </div>
  );
}

export default App;
