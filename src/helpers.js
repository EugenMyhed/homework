import axios from "axios";
export const getDOMElement = nameClass => document.querySelector(nameClass);

export const createListItem = (todo) => {
    const item = document.createElement('li');
    const label = document.createElement('label');
    const input = document.createElement('input');
    const spanCheck = document.createElement('span');
    const spanText = document.createElement('span');
    const ulCount = getDOMElement('.check-form');
    const close = document.createElement('span');
    const ulChecked = getDOMElement('.check-form-second');
    const inpText = getDOMElement('.input-form__input');
    const btn = getDOMElement('.input-form__btn');
   

    item.setAttribute('class','check-form__todo-list-item todo-list-item');
    item.setAttribute('id','listItem'+(ulCount.childNodes.length + 1));
    label.setAttribute('class','todo-list-item__container');
    input.setAttribute('class','checkbox');
    input.setAttribute('type', 'checkbox');
    label.setAttribute('for', 'task'+(ulCount.childNodes.length + 1));
    input.setAttribute('id', 'task'+ (ulCount.childNodes.length + 1)) ;
    spanCheck.setAttribute('class','checkbox-custom');
    spanText.setAttribute('class','label');
    close.setAttribute('class', 'close');

    item.appendChild(label);
    label.appendChild(input);
    label.appendChild(spanCheck);
    label.appendChild(spanText);
    item.appendChild(close);
    close.innerHTML = '&times;';
    
    

    if(todo.text === '')
        spanText.innerHTML = 'Create some task';
    else
        spanText.innerHTML = todo.text;

    close.addEventListener('click', () => {
        axios.delete("https://learn-front-end-api-212606.appspot.com/api/v1/todos/"+todo.id)
        .then((el) => {
            if(el.data.success){
                item.remove();
            }
            else
                console.log("Error")
        })
        .catch((err) => console.log(err))
    } , false);

    input.addEventListener('change',(e) => {
        axios.put("https://learn-front-end-api-212606.appspot.com/api/v1/todos/"+todo.id, {
            text: todo.text,
            done: e.target.checked
        })
        .then((el) =>{
            if(el.data.success){
                console.log(el.data);
                if(el.data.todo.done){
                    ulChecked.insertBefore(item, ulChecked.firstChild);
                    spanText.style.textDecoration = 'line-through';
                }
                else{
                    ulCount.insertBefore(item, ulCount.firstChild);
                    spanText.style.textDecoration = 'none';
                }
        }
        else
            console.log("Error")
        })
        .catch((err) => console.log(err))
    }, false);
    

        btn.addEventListener('', () => {
            /*axios.post("https://learn-front-end-api-212606.appspot.com/api/v1/todos?id=task_list",
                {
                    text: inpText.value,
                });*/
        }, false);
    

    ulCount.insertBefore(item, ulCount.firstChild);

    
}

