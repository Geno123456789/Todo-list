import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTypedSelector } from '../../hook/useTypedSelector';
import './style.css';


const ActiveTodos: React.FC = () => {
    const todos = useTypedSelector((state) => state.todoList.todos);
    const navigate = useNavigate();
    function onCkickBack(): void {
        navigate('/todos')
    }
    return (
        <div className='activeTodosContainer'>
            <h2>Active todos:</h2>
            {todos.map((item) => !item.completed && <li key={item.id}>{item.text}</li>)}
            <button onClick={onCkickBack}>Back</button>
        </div>
    )
}

export default ActiveTodos;

