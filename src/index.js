import {createLi} from "./create-list-item.js";
import {createListItem} from "./helpers.js"
import hdBtn from "./hide-list.js";
import shBtn from "./show-list.js";
import axios from "axios"
import "./todoStyle.css";


   window.addEventListener("load", () =>{

        createLi();
        hdBtn();
        shBtn();
        
        axios.get("https://learn-front-end-api-212606.appspot.com/api/v1/todos?id=task_list")
        .then((el) => {
            if(el.data.success)
                el.data.todos.forEach((obj) => createListItem(obj) );
            else
                console.log("Error");
        })
        .catch((err) => console.log(err))

   });