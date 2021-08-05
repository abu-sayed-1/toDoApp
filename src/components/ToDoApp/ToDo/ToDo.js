import React from 'react';
import { useRef } from 'react';
import { connect } from 'react-redux';
import { addTodo, completedTasks, completedTodo, editTodo, removeTodo, tasks, undoTodo } from '../../../redux/toDoActions/toDoActions';
import CompletedTodo from '../CompletedTodo/CompletedTodo';
import ToDoList from "../ToDoList/ToDoList";

const ToDo = props => {
    const {
        showTasks,
        showCompletedTasks, undoTodo,
        completedTodoList, completedTodo,
        todoItem, removeTodo,
        addToDo, editTodo,
        tasks, completedTasks
    } = props;
    const formRef = useRef(null);
    const handleSubmit = (e) => {
        const colorName = ["blue", "orange", "rad", "cyan"]
        const randomColorNum = Math.floor(Math.random() * 4);
        const findColorName = colorName.find((color, index) => index === randomColorNum);

        const form = formRef.current['addToDo'].value;
        addToDo(form, findColorName);
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
            <button onClick={() => tasks()}>Tasks</button>
            <button onClick={() => completedTasks()}>Completed</button>
            {
                showTasks ? <ToDoList
                    completedTodo={completedTodo}
                    todoItem={todoItem}
                    removeTodo={removeTodo}
                    editTodo={editTodo}
                /> :
                    <CompletedTodo
                        undoTodo={undoTodo}
                        completedTodoList={completedTodoList}
                    />
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        showTasks: state.showTasks,
        showCompletedTasks: state.showCompletedTasks,
        todoItem: state.toDo,
        completedTodoList: state.completedTodoList
    };
};

const mapDispatchToProps = {
    tasks: tasks,
    completedTasks: completedTasks,
    addToDo: addTodo,
    removeTodo: removeTodo,
    editTodo: editTodo,
    completedTodo: completedTodo,
    undoTodo: undoTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);