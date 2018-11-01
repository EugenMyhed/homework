import React, {Component} from "react";
import ReactDOM from "react-dom";

export default class InputForm extends Component{
    render(){
        return(
            <div className="form-container__input-form input-form">
                <form>
                    <input className="input-form__input" type="text" placeholder="What to do?" />
                    <button className="input-form__btn">Button</button>
                </form>
			</div>
        );
    }
}