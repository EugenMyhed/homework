import React, {Component} from "react";
import ReactDOM from "react-dom";


export default class InputForm extends Component{

    render(){
        
        return(
            <button onClick={this.props.postData}  className="input-form__btn-react" >Button</button>
        );
    }
}