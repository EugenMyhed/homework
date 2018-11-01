import { getDOMElement } from './helpers.js';

const hideButton = getDOMElement('.checked-form__hide');
const checkedList = getDOMElement('.check-form-second');

const hideFinishedTodos = () => {hideButton.addEventListener('click', () => {
     checkedList.style.display = 'none';
}, false);
}

export default hideFinishedTodos;