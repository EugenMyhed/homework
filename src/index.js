import {initApp} from "./create-list-item.js";
import {createListItem} from "./helpers.js"
import hideFinishedTodos from "./hide-list.js";
import showTodos from "./show-list.js";
import './components/index'
import axios from "axios"
import "./styles/todoStyle.css";
import "./styles/style-react.css"


   window.addEventListener("load", () =>{

        initApp();
        hideFinishedTodos();
        showTodos();
        
        axios.get("https://learn-front-end-api-212606.appspot.com/api/v1/todos?id=task_list")
        .then((response) => {
            if(response.data.success)
            response.data.todos.forEach((obj) => createListItem(obj) );
            else
                console.log("Error");
        })
        .catch((err) => console.log(err))

   });