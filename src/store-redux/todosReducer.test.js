import todoReducer, {
    addTodoCreator, completeTodoCreator, isEditModeCreator, removeTodoCreator,
    updateNewTodoCreator, updateTodoCreator, updateValueTodoCreator
} from "./todosReducer";


let state;
beforeEach(() => {
    state = {
        todos: [
            { id: 1, text: 'first task', completed: false }
        ],
        todo: '',
        isEditMode: null,
        value: '',
    };
})


test('length of todos should be incremented', () => {
    const action = addTodoCreator()
    const newState = todoReducer(state, action)
    expect(newState.todos.length).toBe(2)
});

test('length of todos should be decremented', () => {
    const action = removeTodoCreator(1)
    const newState = todoReducer(state, action)
    expect(newState.todos.length).toBe(0)
});

test('should be updated todo', () => {
    const action = updateTodoCreator('new todo')
    const newState = todoReducer(state, action)
    expect(newState.todo).toBe('new todo')
});

test('should be updated value', () => {
    const action = updateValueTodoCreator('new value')
    const newState = todoReducer(state, action)
    expect(newState.value).toBe('new value')
});

test('should be updated todos', () => {
    const action = updateNewTodoCreator([{ id: 10, text: 'task', completed: false }])
    const newState = todoReducer(state, action)
    expect(newState.todos).toEqual([{ id: 10, text: 'task', completed: false }])
    expect(newState.todos.length).toBe(1)
});

test('edit mode should be toggled', () => {
    const action = isEditModeCreator(true)
    const newState = todoReducer(state, action)
    expect(newState.isEditMode).toBe(true)
});

test('field `completed` should be changed', () => {
    const action = completeTodoCreator([true])
    const newState = todoReducer(state, action)
    expect(newState.todos).toEqual([true])
});
