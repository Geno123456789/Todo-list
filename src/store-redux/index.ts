import { combineReducers, legacy_createStore } from "redux";
import todoReducer from "./todosReducer";


export const rootReducer = combineReducers({
  todoList: todoReducer
});

export type RootState = ReturnType<typeof rootReducer>

const store = legacy_createStore(rootReducer);

export default store;