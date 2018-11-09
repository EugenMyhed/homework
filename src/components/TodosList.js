import React, {Component} from "react";
import ReactDOM from "react-dom";
import axios from "axios";

export default class TodosList extends Component{

    
    render(props){
        const { text, deleteData, id, updateData, handleChb } = this.props;
        return(
            <li  className="todo-list-item-react">
                <label htmlFor={id} className="todo-list-item-react__container">
                    <input onChange={handleChb} id={id} className="checkbox-react" type="checkbox"/>
                    <span className="checkbox-custom-react"></span>
                    <span className="label-react">{text}</span>
                </label>
                <span onClick={deleteData} className="close-react">&times;</span>
			</li>
        );
    }
}