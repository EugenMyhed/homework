import React, {Component} from "react";
import ReactDOM from "react-dom";
import axios from "axios";

export default class InputForm extends Component{

    render(props){
        const {postData} = this.props;
        return(
            <button onClick={postData}  className="input-form__btn-react" >Button</button>
        );
    }
}