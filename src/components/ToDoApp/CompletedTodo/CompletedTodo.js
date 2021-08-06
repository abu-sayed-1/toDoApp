import React from 'react';

const CompletedTodo = ({ completedTodoList, undoTodo }) => {
    return (
        <div>
            {
                completedTodoList.length > 0 ? completedTodoList.map(({ completedTodo, todoId, background }) => (
                    <div key={todoId} id={`${background}`} className="toDo_items">
                        <del className="completed_tasks">completedTodo: {""} {completedTodo}</del>
                        <i onClick={() => undoTodo(todoId)}
                            className="fas fa-undo icons todo_buttons"
                        >
                        </i>
                    </div>
                )) : <p className="noTask">no Completed to-do list</p>
            }
        </div>
    );
};

export default CompletedTodo;