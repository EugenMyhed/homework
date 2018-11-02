import React, {Component} from "react";
import ReactDOM from "react-dom";
import axios from "axios";

export default class TodosList extends Component{

    
    render(props){
        const { text} = this.props;
        return(
            <li className="todo-list-item-react">
                <label htmlFor="task-react1" className="todo-list-item-react__container">
                    <input id="task-react1" className="checkbox-react" type="checkbox"/>
                    <span className="checkbox-custom-react"></span>
                    <span className="label-react">{text}</span>
                </label>
                <span className="close-react">&times;</span>
			</li>
        );
    }
}