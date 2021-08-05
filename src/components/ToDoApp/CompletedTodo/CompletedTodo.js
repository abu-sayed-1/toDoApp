import React from 'react';

const CompletedTodo = ({ completedTodoList, undoTodo }) => {
    return (
        <div>
            {
                completedTodoList?.map(({ completedTodo, todoId }) => (
                    <div>
                        <del>completedTodo: {""} {completedTodo}</del>
                        <i onClick={() => undoTodo(todoId)} className="fas fa-undo icons"></i>
                    </div>
                ))
            }
        </div>
    );
};

export default CompletedTodo;