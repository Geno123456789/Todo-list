import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateNewTodoCreator, removeTodoCreator, isEditModeCreator, updateValueTodoCreator, completeTodoCreator } from '../../store/todo-reducer';
import s from './TodoItem.module.css';
import deleteBtn from '../../img/delete-button.png';
import editBtn from '../../img/edit-document.png';


function TodoItem({ id, text, completed }) {
    const dispatch = useDispatch();
    const edit = useSelector(state => state.todos.isEditMode);
    const value = useSelector(state => state.todos.value);
    const todos = useSelector(state => state.todos.todos);
    
    const onRemoveTodo = () => {
        dispatch(removeTodoCreator(id))
    }

    const onEditTodo = (id, text) => {
        dispatch(isEditModeCreator(id))
        dispatch(updateValueTodoCreator(text))
    }

    const handleInput = (e) => {
        dispatch(updateValueTodoCreator(e.target.value))
    }

    const saveTodo = (id) => {
        let newTodo = [...todos].map(item => {
            if (item.id === id) {
                item.text = value
            }
            return item;
        })
        dispatch(updateNewTodoCreator(newTodo))
        dispatch(isEditModeCreator(null))
    }

    const handleComplete = (id) => {
        let newComplete = [...todos].map(item => {
            if (item.id === id) {
                item.completed = true
            }
            return item;
        })
        dispatch(completeTodoCreator(newComplete))
    }
    return (
        <li className={s.itemContainer}>
            {
                edit === id ? <div>
                    <input value={value} onChange={(e) => handleInput(e)} />
                </div> : <span className={!completed ? s.active : s.inactive} onClick={() => handleComplete(id)}>{text}</span>
            }
            {
                edit === id ?
                    <div>
                        <button onClick={() => saveTodo(id)}>Save</button>
                    </div> :
                    <div className={s.btnContainer}>
                        <img src={deleteBtn} alt='delete button' onClick={onRemoveTodo} />
                        <img src={editBtn} alt='edit button' onClick={() => onEditTodo(id, text)} />
                    </div>
            }
        </li>
    )
}

export default TodoItem;