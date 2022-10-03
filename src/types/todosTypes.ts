export interface Todo {
    text: string;
    completed: boolean;
    id: string;
  }

export interface TodosState {
    todos: Todo[],
    todo: string;
    isEditMode: null | boolean | string;
    value: string;
}

export enum TodosTypes {
UPDATE_TODO = 'UPDATE_TODO',
ADD_TODO = 'ADD_TODO',
REMOVE_TODO = 'REMOVE_TODO',
UPDATE_VALUE_TODO = ' UPDATE_VALUE_TODO',
UPDATE_NEW_TODO = 'UPDATE_NEW_TODO',
TOGGLE_IS_EDIT_MODE = 'TOGGLE_IS_EDIT_MODE',
COMPLETE_TODO = 'COMPLETE_TODO',
}

interface UpdateTodoAction {
    type:TodosTypes.UPDATE_TODO;
    value: string;
}
interface AddTodoAction {
    type:TodosTypes.ADD_TODO;
    todos: Todo[];
    todo: string;
}
interface RemoveTodoAction {
    type:TodosTypes.REMOVE_TODO;
    id:  string;
}
interface UpdateValueTodoAction {
    type:TodosTypes.UPDATE_VALUE_TODO;
    value: string;
}
interface ToggleIsEditModeAction {
    type:TodosTypes.TOGGLE_IS_EDIT_MODE;
    id: null | boolean;
}
interface UpdateNewTodoAction {
    type:TodosTypes.UPDATE_NEW_TODO;
    newTodo: Todo[];
}
interface CompleteTodoAction {
    type:TodosTypes.COMPLETE_TODO;
    newComplete: Todo[];
}

export type TodosAction = UpdateTodoAction | AddTodoAction | RemoveTodoAction | UpdateValueTodoAction | ToggleIsEditModeAction | UpdateNewTodoAction | CompleteTodoAction;
