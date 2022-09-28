import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodoCreator, updateTodoCreator } from '../../store/todo-reducer';
import TodoList from '../TodoList/TodoList';
import Header from '../Header/Header';
import s from './InputField.module.css';

function InputField() {
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
            <label>
                <input type='text' value={todo} onChange={(e) => handleInput(e)} />
                <button onClick={onAddTodo}>Add Todo</button>
            </label>
            <TodoList />
        </div>
    )
}

export default InputField;