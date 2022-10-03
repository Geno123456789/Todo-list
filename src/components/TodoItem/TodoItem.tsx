import React, { ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import {
    updateNewTodoCreator, removeTodoCreator, completeTodoCreator,
    isEditModeCreator, updateValueTodoCreator
} from '../../store-redux/todosReducer';
import { FaTrashAlt } from 'react-icons/fa';
import { FaRegEdit } from 'react-icons/fa';
import { useTypedSelector } from '../../hook/useTypedSelector';
import './style.css';

const TodoItem: React.FC<{
    id: string;
    text: string;
    completed: boolean;
}> = ({ id, text, completed }) => {
    const dispatch = useDispatch();
    const todos = useTypedSelector((state) => state.todoList.todos);
    const edit = useTypedSelector((state) => state.todoList.isEditMode);
    const value = useTypedSelector((state) => state.todoList.value);

    const onRemoveTodo = (): void => {
        dispatch(removeTodoCreator(id))
    }

    const onEditTodo = (id: string, text: string): void => {
        dispatch(isEditModeCreator(id))
        dispatch(updateValueTodoCreator(text))
    }

    const handleInput = (e: ChangeEvent<HTMLInputElement>): void => {
        dispatch(updateValueTodoCreator(e.target.value))
    }

    const saveTodo = (id: string) => {
        let newTodo = [...todos].map(item => {
            if (item.id === id) {
                item.text = value
            }
            return item;
        })
        dispatch(updateNewTodoCreator(newTodo))
        dispatch(isEditModeCreator(null))
    }

    const handleComplete = (id: string) => {
        let newComplete = [...todos].map(item => {
            if (item.id === id) {
                item.completed = true
            }
            return item;
        })
        dispatch(completeTodoCreator(newComplete))
    }
    return (
        <li className='itemContainer'>
            {
                edit === id ? <div>
                    <input value={value} onChange={(e) => handleInput(e)} />
                </div> : <span className={!completed ? 'active' : 'inactive'} onClick={() => handleComplete(id)}>{text}</span>
            }
            {
                edit === id ?
                    <div>
                        <button className='saveBtn' onClick={() => saveTodo(id)}>Save</button>
                    </div> :
                    <div className='btnContainer'>
                        <button onClick={onRemoveTodo}><FaTrashAlt /></button>
                        <button onClick={() => onEditTodo(id, text)}><FaRegEdit /></button>
                    </div>
            }
        </li>
    )
}

export default TodoItem;

