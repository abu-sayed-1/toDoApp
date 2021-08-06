import React from 'react';
import { useState } from 'react';

const ToDoList = props => {
    const [updateValue, setUpdateValue] = useState('');
    const [editTodoList, setEditTodoList] = useState({
        checkoutEditId: '',
        edit: false
    });
    const {
        todoItem, removeTodo,
        editTodo, completedTodo
    } = props;

    const isSameTodoId = editTodoList.checkoutEditId;
    const updateTodoList = id => {
        if (updateValue) editTodo(id, updateValue);
        setEditTodoList({ edit: false })
        setUpdateValue("");
    };

    return (
        <div className="todoList_container">
            {
                todoItem.length > 0 ? todoItem.map(({ todoList, todoId, background }, index) => (
                    <div key={index}>
                        {
                            (editTodoList.edit && isSameTodoId === todoId) ?
                                <div className="update_container">
                                    <>
                                        <input onChange={
                                            (e) =>
                                                setUpdateValue(e.target.value)
                                        }
                                            defaultValue={isSameTodoId === todoId ? todoList : ""}
                                            type="text"
                                            name=""
                                            className="addTodo_input"
                                        />
                                        <button onClick={() => updateTodoList(todoId)} className="addTodo_btn icons">
                                            <i className="far fa-save"></i>
                                        </button>
                                    </>
                                </div> :

                                <div className="toDo_items" id={`${background}`}>
                                    <p>{todoList}</p>
                                    <div className="todo_buttons">
                                        <div>
                                            <i onClick={() => completedTodo(todoId)} className="far fa-check-circle icons margin_left"></i>
                                            <i onClick={() => removeTodo(todoId)} className="far fa-trash-alt icons margin_left"></i>
                                            <i
                                                onClick={
                                                    () => setEditTodoList({
                                                        edit: true,
                                                        checkoutEditId: todoId
                                                    })
                                                }
                                                className="far fa-edit icons margin_left"
                                            >
                                            </i>
                                        </div>
                                    </div>
                                </div>
                        }
                    </div>
                )) : <p className="noTask">no-Tasks</p>
            }
        </div>
    );
};

export default ToDoList;




















// import React from 'react';
// import { useState } from 'react';

// const ToDoList = props => {
//     const {
//         todoItem, removeTodo,
//         editTodo, completedTodo
//     } = props;
//     const [updateValue, setUpdateValue] = useState('');
//     const [editTodoList, setEditTodoList] = useState({
//         checkoutEditId: '',
//         edit: false
//     });

//     const isSameTodoId = editTodoList.checkoutEditId;
//     const updateTodoList = id => {
//         if (updateValue) editTodo(id, updateValue);
//         setEditTodoList({ edit: false })
//         setUpdateValue("");
//     };
//     return (
//         <div>
//             {
//                 todoItem?.map(({ todoList, todoId, background }) => (
//                     <div className="toDo_items" id={`${background}`} key={todoId}>
//                         <p>{todoList}</p>
//                         <div className="todo_buttons">
//                             <div>
//                                 <i onClick={() => completedTodo(todoId)} className="far fa-check-circle icons margin_left"></i>
//                                 <i onClick={() => removeTodo(todoId)} className="far fa-trash-alt icons margin_left"></i>
//                                 {
//                                     (editTodoList.edit && isSameTodoId === todoId) ?
//                                         <>
//                                             <input onChange={
//                                                 (e) =>
//                                                     setUpdateValue(e.target.value)
//                                             }
//                                                 defaultValue={isSameTodoId === todoId ? todoList : ""}
//                                                 type="text"
//                                                 name="" id=""
//                                             />
//                                             <i onClick={() => updateTodoList(todoId)} className="far fa-save icons"></i>
//                                         </>
//                                         :
//                                         <i
//                                             onClick={
//                                                 () => setEditTodoList({
//                                                     edit: true,
//                                                     checkoutEditId: todoId
//                                                 })
//                                             }
//                                             className="far fa-edit icons margin_left"
//                                         >
//                                         </i>
//                                 }
//                             </div>
//                         </div>
//                     </div>
//                 ))
//             }
//         </div>
//     );
// };

// export default ToDoList;