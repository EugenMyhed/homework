import {combineReducers} from "redux"
import list from "./list"

const rootReducer = combineReducers({
    todoList: list
})

export default rootReducer;