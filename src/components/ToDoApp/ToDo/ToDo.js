import React from 'react';
import { useRef } from 'react';
import { connect } from 'react-redux';
import {
    addTodo, completedTasks,
    completedTodo, editTodo,
    removeTodo, tasks, undoTodo
} from "../../../redux/toDoActions/toDoActions";
import CompletedTodo from '../CompletedTodo/CompletedTodo';
import ToDoList from "../ToDoList/ToDoList";

const ToDo = props => {
    const {
        showTasks, undoTodo,
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
        form && addToDo(form, findColorName);
        e.preventDefault();
    };

    return (
        <div>
            <form ref={formRef}>
                <input className="addTodo_input" type="text" name="addToDo" id="" required />
                <button className="addTodo_btn icons" onClick={handleSubmit}>
                    Add ToDo
                </button>
            </form>
            <div className="tasksAndCompletedTasks_btn">
                <button onClick={() => tasks()} title="Tasks"><i class="fas fa-tasks"></i>Tasks</button>
                <button onClick={() => completedTasks()} title="Completed-Tasks"><i class="fas fa-check"></i>Completed</button>
            </div>
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