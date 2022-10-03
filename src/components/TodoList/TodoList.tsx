import React from 'react'
import { useTypedSelector } from '../../hook/useTypedSelector';
import TodoItem from '../TodoItem/TodoItem';
import './style.css';

const TodoList: React.FC = () => {
  const todos = useTypedSelector((state) => state.todoList.todos);
  return (
    <div className='todoList'>
      {todos.map(item => <TodoItem key={item.id} {...item} />)}
    </div>
  )
}

export default TodoList;

