(function(obj){
    obj.hideBtn = obj.getDOMElement('.checked-form__hide');
    obj.checkedList = obj.getDOMElement('.check-form-second');

    
    obj.hideBtn.addEventListener('click', () => {
        obj.checkedList.style.display = 'none';
    }, false);
}(myApp));