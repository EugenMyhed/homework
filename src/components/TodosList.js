import React, {Component} from "react";
import ReactDOM from "react-dom";

export default class TodosList extends Component{

    
    render(){
        return(
            <li  className="todo-list-item-react">
                <label htmlFor={this.props.idTsak} className="todo-list-item-react__container">
                    <input onChange={this.props.handleChb} id={this.props.idTask} className="checkbox-react" type="checkbox"/>
                    <span className="checkbox-custom-react"></span>
                    <span className="label-react">{this.props.textTask}</span>
                </label>
                <span onClick={this.props.deleteData} className="close-react">&times;</span>
			</li>
        );
    }
}