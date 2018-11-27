import React from "react";
import TodosList from "./TodosList"


    const TaskList = ({todosList, restPutData, restDeleteData, }) => (
          <ul className="check-form-react"> 
                {
                 todosList.slice().reverse().map((el) => <TodosList  element={el}
                 updateData={(event) => restPutData(event, el)}
                 deleteData={() => restDeleteData(el)} 
                 textTask={el.text} idTask={el.id} done={el.done} key={el.id} 
                />)
                }
          </ul>
        );
export default TaskList;