const UPDATE_TODO = 'UPDATE_TODO';
const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const EDIT_TODO = 'EDIT_TODO';

// let initialState = {
//     todos: [],
//     todo: ''
//   }

// const todoReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case UPDATE_TODO:
//             return {
//                 ...state,
//                 todo:  action.value
//               };
//               case ADD_TODO:
//             return {
//                 ...state,
//                 todos: [...state.todos, action.todo],
//                 todo: ''
//               };
        
    
//         default:
//            return state;
//     }
// }

let initialState = {
    todos: [],
    todo: ''
  }

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_TODO:
            return {
                ...state,
                todo:  action.value
              };
              case ADD_TODO:
            return {
                ...state,
                todo: '',
                todos: [...state.todos, {id: new Date().toISOString(), text: state.todo}],
            };
            case REMOVE_TODO:
                return {
                    ...state,
                    todos: state.todos.filter(todo => todo.id !== action.id )
                };
                case EDIT_TODO:
                    return {
                        ...state,
                        todos: state.todos.map((todo, text) => todo.id === action.id ? text = action.text : text )
                    };        
        default:
           return state;
    }
}

export const updateTodoCreator = (value) => ({ type: UPDATE_TODO, value });
export const addTodoCreator = () => ({ type: ADD_TODO});
export const removeTodoCreator = (id) => ({ type: REMOVE_TODO, id });
export const editTodoCreator = (id,text) => ({ type: REMOVE_TODO, id,text });

// export const updateTodoCreator = (value) => ({ type: UPDATE_TODO, value });
// export const addTodoCreator = (todo) => ({ type: ADD_TODO, todo });

export default todoReducer;