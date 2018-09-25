const getDOMElement = nameClass => document.querySelector(nameClass);
const getDOMElements = nameClass => document.querySelectorAll(nameClass);

const createListItem = (text) => {
    const item = document.createElement('li');
    const label = document.createElement('label');
    const input = document.createElement('input');
    const spanCheck = document.createElement('span');
    const spanText = document.createElement('span');
    const ulCount = getDOMElement('.check-form');
    const close = document.createElement('span');
    const ulChecked = getDOMElement('.check-form-second');


    item.setAttribute('class','check-form__todo-list-item todo-list-item');
    label.setAttribute('class','todo-list-item__container');
    input.setAttribute('class','checkbox');
    input.setAttribute('type', 'checkbox');
    label.setAttribute('for', 'task' + (ulCount.childNodes.length + 1));
    input.setAttribute('id', 'task'+ (ulCount.childNodes.length + 1));
    spanCheck.setAttribute('class','checkbox-custom');
    spanText.setAttribute('class','label');
    close.setAttribute('class', 'close');

    item.appendChild(label);
    label.appendChild(input);
    label.appendChild(spanCheck);
    label.appendChild(spanText);
    item.appendChild(close);
    close.innerHTML = '&times;';

    spanText.innerHTML = text;

    close.addEventListener('click', () => item.remove() , false);

    input.addEventListener('change',() => {
        ulChecked.insertBefore(item, ulChecked.firstChild);
        spanText.style.textDecoration = 'line-through';
        if(input.checked !== true){
            ulCount.insertBefore(item, ulCount.firstChild);
            spanText.style.textDecoration = 'none';
        }
    }, false);


    ulCount.insertBefore(item, ulCount.firstChild)
    
}
 
const btn = getDOMElement('.input-form__btn');
const showBtn = getDOMElement('.checked-form__show');
const hideBtn = getDOMElement('.checked-form__hide');
const checkedList = getDOMElement('.check-form-second');

btn.addEventListener('click', ()  => {
    const elementLi = getDOMElement('.input-form__input');
    createListItem(elementLi.value);
    elementLi.value = '';
}, false);

showBtn.addEventListener('click', () => {
    checkedList.style.display = 'block';
    axios.get("https://learn-front-end-api-212606.appspot.com/api/v1/todos")
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}, false);

hideBtn.addEventListener('click', () => {
    checkedList.style.display = 'none';
}, false);

