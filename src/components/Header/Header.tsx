import React from 'react'
import { useTypedSelector } from '../../hook/useTypedSelector';
import './style.css';

const Header: React.FC = () => {
    const todos = useTypedSelector((state) => state.todoList.todos);
    return (
        <div className='headerList'>
            <h1>TODO LIST: {todos.length}</h1>
        </div>
    )
}

export default Header;

