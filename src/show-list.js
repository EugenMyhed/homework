import  {getDOMElement}  from './helpers.js';
import axios from "axios";

const showBtn = getDOMElement('.checked-form__show');
const checkedList = getDOMElement('.check-form-second');

const shBtn = () =>{ showBtn.addEventListener('click', () => {
        checkedList.style.display = 'block';
        axios.get("https://learn-front-end-api-212606.appspot.com/api/v1/todos?id=task_list")
        .then((elem) => console.log(elem.data.todos))
        .catch((err) => console.log(err));

    }, false);
}

    export default shBtn;