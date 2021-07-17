import React from 'react';
import { useState } from 'react';

const ToDoList = props => {
    const { todoItem, removeTodo, editTodo } = props;
    const [updateValue, setUpdateValue] = useState('');
    const [editTodoList, setEditTodoList] = useState({
        checkoutEditId: '',
        edit: false
    });

    const updateTodoList = id => {
        editTodo(id, updateValue)
        setEditTodoList({ edit: false })
    };
    return (
        <div>
            {
                todoItem?.map(({ todoList, todoId }) => (
                    <div key={todoId}>
                        <p>{todoList}</p>
                        <button onClick={() => removeTodo(todoId)}>Remove</button>
                        {
                            (editTodoList.edit && editTodoList.checkoutEditId === todoId) ?
                                <>
                                    <input onChange={(e) => setUpdateValue(e.target.value)} type="text" name="" id="" />
                                    <button onClick={() => updateTodoList(todoId)}>Save</button>

                                </>
                                : <button onClick={() => setEditTodoList({ edit: true, checkoutEditId: todoId })}>Edit</button>
                        }
                    </div>
                ))
            }
        </div>
    );
};

export default ToDoList;