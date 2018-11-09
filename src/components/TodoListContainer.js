import React, {Component} from "react";
import ReactDOM from "react-dom";
import TodosList from "./TodosList"


export default class TodoListContainer extends Component{

    render(){
        return(
          <ul className="check-form-react">
                {this.props.todosList.map((val) => <TodosList handleChb={this.props.helpers} updateData={() => this.props.restPutData(val.id, val.text, val)} deleteData={() => this.props.restDeleteData(val.id, val)} textTask={val.text} idTask={val.id} key={val.id}  />)}
          </ul>
        );
    }
}
