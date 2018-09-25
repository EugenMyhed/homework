(function(obj) {
   obj.createListItem = (text) => {
        obj.item = document.createElement('li');
        obj.label = document.createElement('label');
        obj.input = document.createElement('input');
        obj.spanCheck = document.createElement('span');
        obj.spanText = document.createElement('span');
        obj.ulCount = obj.getDOMElement('.check-form');
        obj.close = document.createElement('span');
        obj.ulChecked = obj.getDOMElement('.check-form-second');
    
    
        obj.item.setAttribute('class','check-form__todo-list-item todo-list-item');
        obj.label.setAttribute('class','todo-list-item__container');
        obj.input.setAttribute('class','checkbox');
        obj.input.setAttribute('type', 'checkbox');
        obj.label.setAttribute('for', 'task' + (obj.ulCount.childNodes.length + 1));
        obj.input.setAttribute('id', 'task'+ (obj.ulCount.childNodes.length + 1));
        obj.spanCheck.setAttribute('class','checkbox-custom');
        obj.spanText.setAttribute('class','label');
        obj.close.setAttribute('class', 'close');
    
        obj.item.appendChild(obj.label);
        obj.label.appendChild(obj.input);
        obj.label.appendChild(obj.spanCheck);
        obj.label.appendChild(obj.spanText);
        obj.item.appendChild(obj.close);
        obj.close.innerHTML = '&times;';
    
        obj.spanText.innerHTML = text;
    
        obj.close.addEventListener('click', () => obj.item.innerHTML = '' , false);
    
        obj.input.addEventListener('change',() => {
            obj.ulChecked.insertBefore(obj.item, obj.ulChecked.firstChild);
            obj.spanText.style.textDecoration = 'line-through';
            
             if(obj.input.checked !== true){
                obj.ulCount.insertBefore(obj.item, obj.ulCount.firstChild);
                obj.spanText.style.textDecoration = 'none';
            }
        }, false);
    
    
        obj.ulCount.insertBefore(obj.item, obj.ulCount.firstChild)
        
    }
    
  
})(myApp);