import { ADD_TODO, COMPLETED_TODO, EDIT_TODO, REMOVE_TODO, UNDO_TODO } from "../toDoActions/toDoActions";

const todoState = {
    toDo: [],
    completedTodoList: [],
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
            return { ...state, toDo: updateTodoList };

        case COMPLETED_TODO:
            const findTodo = state.toDo.filter(todoItem => todoItem.todoId === action.payload);
            const newCompletedTodo = {
                completedTodo: findTodo[0].todoList,
                todoId: findTodo[0].todoId
            }
            const updateCompletedTodo = [...state.completedTodoList, newCompletedTodo];
            const removeTodo = state.toDo.filter(todoItem => todoItem.todoId !== action.payload);
            return { ...state, completedTodoList: updateCompletedTodo, toDo: removeTodo };

        case UNDO_TODO:
            const undoTodo = state.completedTodoList.filter(todoItem => todoItem.todoId === action.payload);
            const newUndoTodo = {
                todoList: undoTodo[0].completedTodo,
                todoId: undoTodo[0].todoId
            }
            const updateTodo = [...state.toDo, newUndoTodo];
            const undoCompletedTodo = state.completedTodoList.filter(todoItem => todoItem.todoId !== action.payload);
            return { ...state, toDo: updateTodo, completedTodoList: undoCompletedTodo }
        default: return state;
    }
};

export default toDoReducers;

