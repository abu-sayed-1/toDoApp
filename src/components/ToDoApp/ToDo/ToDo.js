import React from 'react';
import { useRef } from 'react';

const ToDo = () => {
    const formRef = useRef(null);
    const handleSubmit = (e) => {
        const form = formRef.current['addToDo'].value;
        console.log(form)
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
        </div>
    );
};

export default ToDo;