import React, {Component} from "react";
import ReactDOM from "react-dom";
import axios from "axios";

export default class InputForm extends Component{
      
    handleSubmit (event) {
        event.preventDefault();
    }

    render(){
        return(
            <input className="input-form__input-react" type="text" placeholder="What to do?" />
        );
    }
}