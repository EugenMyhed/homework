import React from "react";
import TaskListItem from "./TaskListItem"


    const TaskList = ({todosList, onTaskUpdate , onTaskDelete, isVisible}) => {
          if(isVisible){
                return(
                        <ul className = "check-form-react" > 
                              {
                                    todosList.slice().reverse().map((el) => <TaskListItem  element={el}
                                    updateData={(event) => onTaskUpdate (event, el)}
                                    deleteData={() => onTaskDelete(el)} 
                                    textTask={el.text} idTask={el.id} done={el.done} key={el.id} />)
                              }
                        </ul>)
                  }

            return null;

            };
export default TaskList;