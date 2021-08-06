import {
    ADD_TODO, COMPLETED_TASKS,
    COMPLETED_TODO, EDIT_TODO,
    REMOVE_TODO, TASKS,
    UNDO_TODO
} from "../toDoActions/toDoActions";

const todoState = {
    toDo: [],
    completedTodoList: [],
    showTasks: true,
};

const toDoReducers = (state = todoState, action) => {
    switch (action.type) {
        case TASKS:
            return { ...state, showTasks: true }

        case COMPLETED_TASKS:
            return { ...state, showTasks: false }
        case ADD_TODO:
            const newItem = {
                todoList: action.payload.data,
                background: action.payload.colorName,
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
            return { ...state, toDo: updateTodoList };

        case COMPLETED_TODO:
            const findTodo = state.toDo.filter(todoItem => todoItem.todoId === action.payload);
            const newCompletedTodo = {
                completedTodo: findTodo[0].todoList,
                todoId: findTodo[0].todoId,
                background: findTodo[0].background
            }
            const updateCompletedTodo = [...state.completedTodoList, newCompletedTodo];
            const removeTodo = state.toDo.filter(todoItem => todoItem.todoId !== action.payload);
            return { ...state, completedTodoList: updateCompletedTodo, toDo: removeTodo };

        case UNDO_TODO:
            const undoTodo = state.completedTodoList.filter(todoItem => todoItem.todoId === action.payload);
            const newUndoTodo = {
                todoList: undoTodo[0].completedTodo,
                todoId: undoTodo[0].todoId,
                background: undoTodo[0].background
            }
            const updateTodo = [...state.toDo, newUndoTodo];
            const undoCompletedTodo = state.completedTodoList.filter(todoItem => todoItem.todoId !== action.payload);
            return { ...state, toDo: updateTodo, completedTodoList: undoCompletedTodo }
        default: return state;
    }
};

export default toDoReducers;

