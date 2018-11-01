import React, {Component} from "react";
import ReactDOM from "react-dom";
import InputForm from "./InputForm";
import TodosList from "./TodosList";
import ResultBtn from "./ResultBtn";
import axios from "axios";

export default class App extends Component{
    render(){
        return(
            <div>
                <InputForm/>
                <ul className="check-form-react">
                    <TodosList/>
                </ul>
                <ResultBtn/>
            </div>
        );
    }
}

ReactDOM.render(<App/> ,document.getElementById('root')
);