import { getDOMElement } from './helpers.js';

const hideBtn = getDOMElement('.checked-form__hide');
const checkedList = getDOMElement('.check-form-second');

const hdBtn = () => {hideBtn.addEventListener('click', () => {
     checkedList.style.display = 'none';
     

}, false);
}

export default hdBtn;