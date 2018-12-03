import React from "react";
import TodosList from "./TodosList"


    const TaskList = ({todosList, onTaskUpdate , onTaskDelete, isVisible}) => {
          if(isVisible){
                return(
                        <ul className = "check-form-react" > 
                              {
                                    todosList.slice().reverse().map((el) => <TodosList  element={el}
                                    updateData={(event) => onTaskUpdate (event, el)}
                                    deleteData={() => onTaskDelete(el)} 
                                    textTask={el.text} idTask={el.id} done={el.done} key={el.id} />)
                              }
                        </ul>)
                  }

            return null;

            };
export default TaskList;