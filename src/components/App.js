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
            todos: [],
            isChecked: false

        };

        this.createTask = this.createTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.updateTask = this.updateTask.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
    
      }


    handleSubmit (event) {
        event.preventDefault();
    }

    componentDidMount(){
        
        axios.get("https://learn-front-end-api-212606.appspot.com/api/v1/todos")
        .then((response) => {
            console.log(response )
            const todoArray = response.data.todos;
            this.setState({ todos: todoArray})
        })
            
        .catch((err) => console.log(err))
        
    }
    
    createTask(){
        const textArea = document.getElementsByClassName('input-form__input-react')[0];
        console.log(textArea)
        axios.post("https://learn-front-end-api-212606.appspot.com/api/v1/todos", {
                text: textArea.value
        })
        .then( response => {
            const todo = response.data.todo;
            console.log(todo)
            const newArray = [todo, ... this.state.todos];
            
            this.setState({ todos: newArray })

        })
        .catch(err => console.log(err))
    
    }

    deleteTask(id, el){
        axios.delete("https://learn-front-end-api-212606.appspot.com/api/v1/todos/" + id)
        .then(response =>{
            console.log(response.data)
            const numElement = this.state.todos.indexOf(el);
            const taskList = this.state.todos;
            taskList.splice(numElement, 1);
            this.setState({ todos: taskList });
        })
        
    }

    handleCheckbox(event, val){
        const checkboxState = event.target.checked;
        this.setState({ isChecked: checkboxState })
        console.log(this.state.isChecked)
        console.log(val)
    }

    updateTask( id, text, el){
        /*axios.put("https://learn-front-end-api-212606.appspot.com/api/v1/todos/" + id,{
            text: text, 
            done: this.state.isChecked
        })*/
        
    }
    

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit} className="form-container__input-form input-form">
                    <InputTextArea/>
                    <AddTextButton postData={this.createTask} />
                </form>
                <ul className="check-form-react">
                    {this.state.todos.map((val) => <TodosList handleChb={this.handleCheckbox}  updateData={() => this.updateTask(val.id, val.text, val)} 
                     deleteData={() =>this.deleteTask(val.id, val)}  text={val.text} id={val.id} key={val.id} />)}
                </ul>
                <ResultBtn/>
                <ul className="checked-form-react">
                    
                </ul>
            </div>
        );
    }
}

ReactDOM.render(<App/> ,document.getElementById('root')
);