import React from 'react';

const CompletedTodo = ({ completedTodoList, undoTodo }) => {
    return (
        <div>
            {
                completedTodoList?.map(({ completedTodo, todoId }) => (
                    <div>
                        <del>completedTodo: {""} {completedTodo}</del>
                        <button onClick={() => undoTodo(todoId)}>undo</button>
                    </div>
                ))
            }
        </div>
    );
};

export default CompletedTodo;