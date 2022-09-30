import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import s from './ActiveTodos.module.css'

function ActiveTodos() {
    const todos = useSelector(state => state.todos.todos);
    const navigate = useNavigate();
    const onCkickBack = () => {
        navigate('/todos')
    }
    
    return (
        <div className={s.activeTodosContainer}>
            <h2>Active todos:</h2>
            {todos.map(item => !item.completed && <li key={item.id}>{item.text}</li>)}
            <button onClick={onCkickBack}>Back</button>
        </div>
    )
}

export default ActiveTodos;