
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editTodoCreator, removeTodoCreator } from '../../store/todo-reducer';

function TodoItem({text,id}) {
    const dispatch = useDispatch();

    const onRemoveTodo = () => {
        dispatch(removeTodoCreator(id))
    }
const [edit, setEdit]= useState(null)
const [value, setValue] = useState('')

    const onEditTodo = (id, text) => {
        // dispatch(editTodoCreator(id,text))
        setEdit(id);
        setValue(text)
    }
  const todos = useSelector(state => state.todos.todos);

const saveTodo = (id) => {
    let newTodo = [...todos].map(item => {
        if(item.id === id){
            item.text = value
        }
        return item;
    })
    dispatch(editTodoCreator(newTodo))
    setEdit(null)

}

  return (
    <li>
        {
            edit === id ? <div>
                <input value={value} onChange={(e) => setValue(e.target.value)} />
            </div> : <span>{text}</span>
        }
        {
            edit === id ? 
            <div>
                <button onClick={() => saveTodo(id)}>Save</button>
            </div> :
            <div>
                <span onClick={onRemoveTodo}>&times;</span>
                 <button onClick={()=> onEditTodo(id, text)}>&diams;</button>
            </div>
        }
        
    </li>
  )
}

export default TodoItem;