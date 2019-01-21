const setTask = task =>({
    type: "SET_TASK", 
    todos: task
});

const setTextBoxValue = text =>({
    type: "SET_TEXT", 
    textBox: text
});

const setVisibilityFilter = visibility =>({
    type: "SET_VISIBILITY", 
    isVisible: visibility
});

export {setTask, setTextBoxValue, setVisibilityFilter};