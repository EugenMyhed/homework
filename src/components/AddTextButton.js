import React, {Component} from "react";
import ReactDOM from "react-dom";
import axios from "axios";

export default class InputForm extends Component{

    render(props){
        const {onAddText} = this.props;
        return(
            <button  className="input-form__btn" >Button</button>
        );
    }
}