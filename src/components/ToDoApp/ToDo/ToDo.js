import React from 'react';
import { useRef } from 'react';
import { connect } from 'react-redux';
import { addTodo, editTodo, removeTodo } from '../../../redux/toDoActions/toDoActions';
import ToDoList from "../ToDoList/ToDoList";

const ToDo = props => {
    const { todoItem, removeTodo, addToDo, editTodo } = props;
    const formRef = useRef(null);
    const handleSubmit = (e) => {
        const form = formRef.current['addToDo'].value;
        addToDo(form);
        e.preventDefault();
    }
    return (
        <div>
            <form ref={formRef}>
                <input type="text" name="addToDo" id="" required />
                <button onClick={handleSubmit}>
                    AddToDo
                </button>
            </form>
            <ToDoList todoItem={todoItem} removeTodo={removeTodo} editTodo={editTodo} />
        </div>
    );
};

const mapStateToProps = state => {
    return { todoItem: state.toDo };
};

const mapDispatchToProps = {
    addToDo: addTodo,
    removeTodo: removeTodo,
    editTodo: editTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);