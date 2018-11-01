import { getDOMElement, createListItem } from './helpers.js';
import axios from "axios";

const btn = getDOMElement('.input-form__btn');
export const initApp = () => { btn.addEventListener('click', ()  => {
    const todoTextInput = getDOMElement('.input-form__input');
    
    axios.post("https://learn-front-end-api-212606.appspot.com/api/v1/todos",
        {
            text: todoTextInput.value,
        })
    .then((response) => {
       
        if(response.data.success){
            createListItem(response.data.todo);
        }
        else
        console.log("Error")
    })
    .catch((err) => console.log(err));

    todoTextInput.value = '';

}, false);
}


