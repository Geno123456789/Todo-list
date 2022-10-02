import React, { ChangeEvent } from 'react'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useTypedSelector } from '../../hook/useTypedSelector';
import { addTodoCreator, updateTodoCreator } from '../../store-redux/todosReducer';
import Header from '../Header/Header';
import TodoList from '../TodoList/TodoList';
import './style.css';


const TodosPage: React.FC = () => {
    const todo = useTypedSelector((state) => state.todoList.todo);
    const dispatch = useDispatch();

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        const todo = e.target.value;
        dispatch(updateTodoCreator(todo));

    }
    const onAddTodo = (): void => {
        dispatch(addTodoCreator());
    }
    return (
        <div className='container'>
            <Header />
            <div className='inputContainer'>
                <input type='text' value={todo} onChange={(e) => handleInput(e)} />
                <button onClick={onAddTodo}>Add Todo</button>
            </div>
            <div className='linkContainer'>
                <NavLink to='/active' className='linkActiveTodos'>Active todos</NavLink>
                <NavLink to='/inactive' className='linkInactiveTodos'>Inactive todos</NavLink>
            </div>
            <TodoList />
        </div>
    )
}

export default TodosPage;

