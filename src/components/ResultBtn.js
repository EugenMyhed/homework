import React, {Component} from "react";
import ReactDOM from "react-dom";

export default class ResultBtn extends Component{
    prinT(){
        console.log("22222")
    }
    render(){
        return(
            <div className="form-container__checked-form-react checked-form-react">
                <button className="checked-form__hide-react">Hide Finished Items</button>
                <button onClick={this.prinT} className="checked-form__show-react">Show Finished Items</button>
            </div>
        );
    }
}