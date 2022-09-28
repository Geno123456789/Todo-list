const UPDATE_TODO = 'UPDATE_TODO';
const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const UPDATE_VALUE_TODO = ' UPDATE_VALUE_TODO';
const UPDATE_NEW_TODO = 'UPDATE_NEW_TODO';
const TOGGLE_IS_EDIT_MODE = 'TOGGLE_IS_EDIT_MODE';
const COMPLETE_TODO = 'COMPLETE_TODO';

let initialState = {
    todos: [],
    todo: '',
    isEditMode: null,
    value: '',
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_TODO:
            return {
                ...state,
                todo: action.value
            };
        case ADD_TODO:
            return {
                ...state,
                todo: '',
                todos: [...state.todos, { id: new Date().toISOString(), text: state.todo, completed: false }],
            };
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id)
            };
        case UPDATE_VALUE_TODO:
            return {
                ...state,
                value: action.value
            }
        case TOGGLE_IS_EDIT_MODE:
            return {
                ...state,
                isEditMode: action.id,
            }
        case UPDATE_NEW_TODO:
            return {
                ...state,
                todos: action.newTodo
            };
            case COMPLETE_TODO:
                return {
                    ...state,
                    todos: action.newComplete
                }    
        default:
            return state;
    }
}

export const updateTodoCreator = (value) => ({ type: UPDATE_TODO, value });
export const addTodoCreator = () => ({ type: ADD_TODO });
export const removeTodoCreator = (id) => ({ type: REMOVE_TODO, id });
export const updateValueTodoCreator = (value) => ({ type: UPDATE_VALUE_TODO, value });
export const updateNewTodoCreator = (newTodo) => ({ type: UPDATE_NEW_TODO, newTodo });
export const isEditModeCreator = (id) => ({ type: TOGGLE_IS_EDIT_MODE, id });
export const completeTodoCreator = (newComplete) => ({ type: COMPLETE_TODO, newComplete });

export default todoReducer;