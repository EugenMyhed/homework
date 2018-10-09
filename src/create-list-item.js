import { getDOMElement, createListItem } from './helpers.js';
import axios from "axios";

const btn = getDOMElement('.input-form__btn');
export const createLi = () => { btn.addEventListener('click', ()  => {
    const elementLi = getDOMElement('.input-form__input');
    
    axios.post("https://learn-front-end-api-212606.appspot.com/api/v1/todos",
        {
            text: elementLi.value,
        })
    .then((e) => {
       
        if(e.data.success){
            createListItem(e.data.todo);
        }
        else
        console.log("Error")
    })
    .catch((err) => console.log(err));

    elementLi.value = '';

}, false);
}


