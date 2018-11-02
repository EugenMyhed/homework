import React, {Component} from "react";
import ReactDOM from "react-dom";
import InputTextArea from "./InputTextArea";
import AddTextButton from "./AddTextButton";
import TodosList from "./TodosList";
import ResultBtn from "./ResultBtn";
import axios from "axios";

export default class App extends Component{

    constructor(props) {
        super(props);

        this.state = {
            todos: []
        };
        //this.getData = this.getData.bind(this);
      }


    handleSubmit (event) {
        event.preventDefault();
    }

    componentDidMount(){
        console.log("11111111")
        axios.get("https://learn-front-end-api-212606.appspot.com/api/v1/todos")
        .then((response) => {
            console.log(response.data.todos)
            const todoArray = response.data.todos;
            this.setState({ todos: todoArray})
        })
            
        .catch((err) => console.log(err))
    }


    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit} className="form-container__input-form input-form">
                    <InputTextArea/>
                    <AddTextButton />
                </form>
                <ul className="check-form-react">
                    {
                    this.state.todos.map((val) => <TodosList text={val.text} key={val.id}/>)
                    }
                </ul>
                <ResultBtn/>
            </div>
        );
    }
}

ReactDOM.render(<App/> ,document.getElementById('root')
);