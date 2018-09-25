(function(obj){
    obj.showBtn = obj.getDOMElement('.checked-form__show');
    obj.checkedList = obj.getDOMElement('.check-form-second');

    obj.showBtn.addEventListener('click', () => {
        obj.checkedList.style.display = 'block';
    }, false);

}(myApp));