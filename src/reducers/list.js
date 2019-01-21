
const initialState = {
    todos: [],
    textBox: '',
    isVisible: true
}

export default function list(state = initialState, action){
    switch(action.type){
        case "SET_VISIBILITY":
            return { ...state, isVisible: action.isVisible };
        case "SET_TASK":
            return { ...state, todos: action.todos};
        case "SET_TEXT":
            return { ...state, textBox: action.textBox };
        default:
            return state;
    }
}