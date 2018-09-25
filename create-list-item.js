(function(obj) {
     obj.btn = obj.getDOMElement('.input-form__btn');

     obj.btn.addEventListener('click', ()  => {
        obj.elementLi = obj.getDOMElement('.input-form__input');
    obj.createListItem(obj.elementLi.value);
    obj.elementLi.value = '';
}, false);
   
 })(myApp);