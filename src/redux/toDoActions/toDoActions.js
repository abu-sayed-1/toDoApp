export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const COMPLETED_TODO = "COMPLETED_TODO";
export const UNDO_TODO = "UNDO_TODO";
export const TASKS = "TASKS";
export const COMPLETED_TASKS = "COMPLETED_TASKS";

export const tasks = () => {
    return { type: TASKS };
};

export const completedTasks = () => {
    return { type: COMPLETED_TASKS };
};

export const addTodo = (data, colorName) => {
    return { type: ADD_TODO, payload: { data: data, colorName: colorName } };
};

export const removeTodo = id => {
    return { type: REMOVE_TODO, payload: id };
};

export const editTodo = (id, newData) => {
    return { type: EDIT_TODO, payload: { id: id, newData: newData } };
};

export const completedTodo = id => {
    return { type: COMPLETED_TODO, payload: id };
};

export const undoTodo = id => {
    return { type: UNDO_TODO, payload: id };
};

