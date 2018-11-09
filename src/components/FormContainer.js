import React, {Component} from "react";
import ReactDOM from "react-dom";
import AddTextButton from "./AddTextButton";

export default class FormContainer extends Component{
      
    handleSubmit (event) {
        event.preventDefault();
    }
    
    render(){
       
        return(
           <form onSubmit={this.handleSubmit} className="form-container__input-form input-form">
                <input className="input-form__input-react" type="text" placeholder="What to do?" />
                <AddTextButton postData={this.props.restPostData} />
           </form>
        );
    }
}