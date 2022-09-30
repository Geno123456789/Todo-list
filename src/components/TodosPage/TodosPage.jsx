import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addTodoCreator, updateTodoCreator } from '../../store/todo-reducer';
import Header from '../Header/Header';
import TodoList from '../TodoList/TodoList';
import s from './TodosPage.module.css';

function TodosPage() {
    const todo = useSelector(state => state.todos.todo);
    const dispatch = useDispatch();

    const handleInput = (e) => {
        const todo = e.target.value;
        dispatch(updateTodoCreator(todo));

    }
    const onAddTodo = () => {
        dispatch(addTodoCreator());
    }
  return (
    <div className={s.container}>
            <Header />
            <div className={s.inputContainer}>
                <input type='text' value={todo} onChange={(e) => handleInput(e)} />
                <button onClick={onAddTodo}>Add Todo</button>
            </div>
            <div className={s.linkContainer}>
            <NavLink to='/active' className={s.linkActiveTodos}>Active todos</NavLink>
            <NavLink to='/inactive' className={s.linkInactiveTodos}>Inactive todos</NavLink>
            </div>
            <TodoList />
        </div>
  )
}

export default TodosPage;