import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import s from './InactiveTodos.module.css';

function InactiveTodos() {
    const todos = useSelector(state => state.todos.todos);
    const navigate = useNavigate();
    const onCkickBack = () => {
        navigate('/todos')
    }
  return (
    <div className={s.inactiveTodosContainer}>
    <h2>Inactive todos:</h2>
    {todos.map(item => item.completed && <li key={item.id}>{item.text}</li>)}
    <button onClick={onCkickBack}>Back</button>
</div>
  )
}

export default InactiveTodos;