import  {getDOMElement}  from './helpers.js';
import axios from "axios";

const showButton = getDOMElement('.checked-form__show');
const checkedList = getDOMElement('.check-form-second');

const showTodos = () =>{ showButton.addEventListener('click', () => {
        checkedList.style.display = 'block';
        axios.get("https://learn-front-end-api-212606.appspot.com/api/v1/todos")
        .then((response) => console.log(response.data.todos))
        .catch((err) => console.log(err));

    }, false);
}

    export default showTodos;