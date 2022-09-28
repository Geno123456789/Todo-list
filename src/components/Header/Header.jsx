import React from 'react'
import { useSelector } from 'react-redux';
import s from './Header.module.css';

function Header() {
    const counter = useSelector(state => state.todos.todos);
    return (
        <div className={s.headerList}>
            <h1>TODO LIST: {counter.length}</h1>
        </div>
    )
}

export default Header
