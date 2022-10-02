import { Todo, TodosAction, TodosState, TodosTypes } from "../types/todosTypes";

const initialState: TodosState = {
    todos: [],
    todo: '',
    isEditMode: null,
    value: '',
}

const todoReducer = (state = initialState, action: TodosAction): TodosState => {
    switch (action.type) {
        case TodosTypes.UPDATE_TODO:
            return {
                ...state,
                todo: action.value
            };
        case TodosTypes.ADD_TODO:
            return {
                ...state,
                todo: '',
                todos: [...state.todos, { id: new Date().toISOString(), text: state.todo, completed: false }],
            };
        case TodosTypes.REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id)
            };
        case TodosTypes.UPDATE_VALUE_TODO:
            return {
                ...state,
                value: action.value
            }
        case TodosTypes.TOGGLE_IS_EDIT_MODE:
            return {
                ...state,
                isEditMode: action.id,
            }
        case TodosTypes.UPDATE_NEW_TODO:
            return {
                ...state,
                todos: action.newTodo
            };
            case TodosTypes.COMPLETE_TODO:
                return {
                    ...state,
                    todos: action.newComplete
                }    
        default:
            return state;
    }
}

export const updateTodoCreator = (value: string) => ({ type: TodosTypes.UPDATE_TODO, value });
export const addTodoCreator = () => ({ type: TodosTypes.ADD_TODO });
export const removeTodoCreator = (id: string) => ({ type: TodosTypes.REMOVE_TODO, id });
export const updateValueTodoCreator = (value: string) => ({ type: TodosTypes.UPDATE_VALUE_TODO, value });
export const updateNewTodoCreator = (newTodo: Todo[]) => ({ type: TodosTypes.UPDATE_NEW_TODO, newTodo });
export const isEditModeCreator = (id: string | null) => ({ type: TodosTypes.TOGGLE_IS_EDIT_MODE, id });
export const completeTodoCreator = (newComplete: Todo[]) => ({ type: TodosTypes.COMPLETE_TODO, newComplete });

export default todoReducer;