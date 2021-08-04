import React from 'react';
import { useState } from 'react';

const ToDoList = props => {
    const {
        todoItem, removeTodo,
        editTodo, completedTodo
    } = props;

    const [updateValue, setUpdateValue] = useState('');
    const [editTodoList, setEditTodoList] = useState({
        checkoutEditId: '',
        edit: false
    });

    const isSameTodoId = editTodoList.checkoutEditId;
    const updateTodoList = id => {
        if (updateValue) editTodo(id, updateValue);
        setEditTodoList({ edit: false })
        setUpdateValue("");
    };
    return (
        <div>
            {
                todoItem?.map(({ todoList, todoId }) => (
                    <div className="toDoList_container" key={todoId}>
                        <p>{todoList}</p>
                        <input onClick={() => completedTodo(todoId)} type="radio" />
                        <button onClick={() => removeTodo(todoId)}>Remove</button>
                        {
                            (editTodoList.edit && isSameTodoId === todoId) ?
                                <>
                                    <input onChange={
                                        (e) =>
                                            setUpdateValue(e.target.value)
                                    }
                                        defaultValue={isSameTodoId === todoId ? todoList : ""}
                                        type="text"
                                        name="" id=""
                                    />
                                    <button onClick={
                                        () => updateTodoList(todoId)
                                    }>
                                        Save
                                    </button>
                                </>
                                : <button onClick={
                                    () => setEditTodoList({
                                        edit: true,
                                        checkoutEditId: todoId
                                    })
                                }>
                                    Edit
                                </button>
                        }
                    </div>
                ))
            }
        </div>
    );
};

export default ToDoList;