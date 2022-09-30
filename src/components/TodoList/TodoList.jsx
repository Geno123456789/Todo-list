import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from '../TodoItem/TodoItem';
import s from './TodoList.module.css';

function TodoList() {
  const todos = useSelector(state => state.todos.todos);

  return (
    <div className={s.todoList}>
      {todos.map(item => <TodoItem key={item.id} {...item} />)}
    </div>
  )
}

export default TodoList;