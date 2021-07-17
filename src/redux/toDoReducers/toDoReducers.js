import { ADD_TODO, EDIT_TODO, REMOVE_TODO } from "../toDoActions/toDoActions";

const todoState = {
    toDo: [],
};

const toDoReducers = (state = todoState, action) => {
    switch (action.type) {
        case ADD_TODO:
            const newItem = {
                todoList: action.payload,
                todoId: state.toDo.length + 1
            };
            const updateState = [...state.toDo, newItem];
            return { ...state, toDo: updateState }
        case REMOVE_TODO:
            const removeTodoList = state.toDo.filter(todoItem => todoItem.todoId !== action.payload);
            return { ...state, toDo: removeTodoList }

        case EDIT_TODO:
            const updateTodoList = state.toDo.map((todoItem) => {
                if (todoItem.todoId === action.payload.id) {
                    return {
                        ...todoItem,
                        todoList: action.payload.newData
                    }
                }
                return todoItem;
            })
            return { ...state, toDo: updateTodoList }
        default: return state;
    }
};

export default toDoReducers;

