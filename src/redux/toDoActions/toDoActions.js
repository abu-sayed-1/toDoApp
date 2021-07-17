export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const EDIT_TODO = "EDIT_TODO";

export const addTodo = data => {
    return { type: ADD_TODO, payload: data }
};

export const removeTodo = id => {
    return { type: REMOVE_TODO, payload: id }
};

export const editTodo = (id, newData) => {
    return { type: EDIT_TODO, payload: { id: id, newData: newData } }
};
