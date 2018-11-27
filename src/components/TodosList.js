import React from "react";

const TodosList = ({textTask, idTask, done, element, deleteData, updateData}) => (
            <li  className="todo-list-item-react">
                <label htmlFor={idTask} className="todo-list-item-react__container">
                    <input onChange={updateData} id={idTask}  className="checkbox-react" type="checkbox" checked={done}/>
                    <span className="checkbox-custom-react"></span>
                    <span className={element.done ? "task-text_done" : "task-text"}>{textTask}</span>
                </label>
                <span onClick={deleteData} className="close-react">&times;</span>
			</li>
        );
export default TodosList;