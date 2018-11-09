import React, {Component} from "react";
import ReactDOM from "react-dom";
import FormContainer from "./FormContainer"
import TodoListContainer from "./TodoListContainer"
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
            if(response.data.success){
                const todoArray = response.data.todos;
                this.setState({ todos: todoArray})
            }
            else{
                console.log("Error!")
            }
            
        })
            
        .catch((err) => console.log(err))
        
    }
    
    createTask(){
        const textArea = document.getElementsByClassName('input-form__input-react')[0];
        axios.post("https://learn-front-end-api-212606.appspot.com/api/v1/todos", {
                text: textArea.value
        })
        .then( response => {
            if(response.data.success){
                const todo = response.data.todo;
                const newArray = [todo, ... this.state.todos];
                this.setState({ todos: newArray })
            }
            else{
                console.log("Error!")
            }

        })
        .catch(err => console.log(err))
    
    }

    deleteTask(id, el){
        axios.delete("https://learn-front-end-api-212606.appspot.com/api/v1/todos/" + id)
        .then(response =>{
            if(response.data.success){
                const numElement = this.state.todos.indexOf(el);
                const taskList = this.state.todos;
                taskList.splice(numElement, 1);
                this.setState({ todos: taskList });
            }
            else{
                console.log("Error!")
            }
           
        })
        
    }

    handleCheckbox(event, val){
        const checkboxState = event.target.checked;
        this.setState({ isChecked: checkboxState })
        console.log(this.state.isChecked)
        //console.log(val)
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
                <FormContainer restPostData={this.createTask}/>

                <TodoListContainer helpers={this.handleCheckbox} restPutData={this.updateTask} restDeleteData={this.deleteTask} todosList={this.state.todos} />

                <ResultBtn/>
                
            </div>
        );
    }
}

ReactDOM.render(<App/> ,document.getElementById('root')
);