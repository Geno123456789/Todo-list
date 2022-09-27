import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from '../TodoItem/TodoItem';

function TodoList() {
    const todos = useSelector(state => state.todos.todos);
    
  return (
    <div>
        {todos.map(item => <TodoItem key={item.id} {...item} />)}
        </div>
  )
}

export default TodoList