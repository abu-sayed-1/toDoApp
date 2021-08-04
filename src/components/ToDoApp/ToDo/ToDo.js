import React from 'react';
import { useRef } from 'react';
import { connect } from 'react-redux';
import { addTodo, completedTodo, editTodo, removeTodo, undoTodo } from '../../../redux/toDoActions/toDoActions';
import CompletedTodo from '../CompletedTodo/CompletedTodo';
import ToDoList from "../ToDoList/ToDoList";

const ToDo = props => {
    const { undoTodo, completedTodoList, completedTodo, todoItem, removeTodo, addToDo, editTodo } = props;
    const formRef = useRef(null);
    const handleSubmit = (e) => {
        const form = formRef.current['addToDo'].value;
        addToDo(form);
        e.preventDefault();
    };

    return (
        <div>
            <form ref={formRef}>
                <input className="addTodo_input" type="text" name="addToDo" id="" required />
                <button className="addTodo_btn" onClick={handleSubmit}>
                    Add ToDo
                </button>
            </form>
            <ToDoList
                completedTodo={completedTodo}
                todoItem={todoItem}
                removeTodo={removeTodo}
                editTodo={editTodo}
            />
            <CompletedTodo
                undoTodo={undoTodo}
                completedTodoList={completedTodoList}
            />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        todoItem: state.toDo,
        completedTodoList: state.completedTodoList
    };
};

const mapDispatchToProps = {
    addToDo: addTodo,
    removeTodo: removeTodo,
    editTodo: editTodo,
    completedTodo: completedTodo,
    undoTodo: undoTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);