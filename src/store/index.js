import { combineReducers, legacy_createStore } from "redux";
import todoReducer from "./todo-reducer";


let reducers = combineReducers({
    todos: todoReducer,
})

let store = legacy_createStore(reducers);

export default store;