import React, {Component} from "react";
import ReactDOM from "react-dom";
import FormContainer from "./FormContainer"
import TaskList from "./TaskList"
import ActionBtn from "./ActionBtn";
import axios from "axios";
export default class App extends Component{

    constructor(props) {
        super(props);

        this.state = {
            todos: [],
            taskText: '', 
            isVisible: true
        };

        this.createTask = this.createTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.updateTask = this.updateTask.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.hideTaskList = this.hideTaskList.bind(this);
        this.showTaskList = this.showTaskList.bind(this);
    
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
    
    createTask(event){
        event.preventDefault();

        axios.post("https://learn-front-end-api-212606.appspot.com/api/v1/todos", {
                text: this.state.taskText
        })
        .then( response => {
            if(response.data.success){
                axios.get("https://learn-front-end-api-212606.appspot.com/api/v1/todos")
                .then((response) =>{
                    if(response.data.success){
                        this.setState({ todos: response.data.todos})
                    }

                    else{
                        console.log("Error!")
                    }
                })
                .catch(err => console.log(err))
            }

            /*if(response.data.success){
                const todo = response.data.todo;
                const newArray = [todo, ... this.state.todos];

                this.setState({todos: newArray})

            }*/
            else{
                console.log("Error!")
            }

        })
        .catch(err => console.log(err))
    
    }

    deleteTask(el){
        axios.delete("https://learn-front-end-api-212606.appspot.com/api/v1/todos/" + el.id)
        .then(response =>{
            if(response.data.success){
                axios.get("https://learn-front-end-api-212606.appspot.com/api/v1/todos")
                    .then((response) =>{
                        if(response.data.success){

                            this.setState({ todos: response.data.todos});

                        }

                        else{
                            console.log("Error!");
                        }
                    })
                    .catch(err => console.log(err))
            }
            /*if(response.data.success){
                const taskList = this.state.todos;
                const newArray = taskList.filter( (element) => {
                    if(element.id !== el.id){ 
                        return element;
                    }
                })

                this.setState({ todos: newArray});

            }*/
            else{
                console.log("Error!")
            }
           
        })
        
    }

   updateTask(event, el){
         axios.put("https://learn-front-end-api-212606.appspot.com/api/v1/todos/" + el.id,{
            text: el.text, 
            done: event.target.checked
        })
        .then((response) => {

            if(response.data.success){
                axios.get("https://learn-front-end-api-212606.appspot.com/api/v1/todos")
                .then((response) =>{
                    if(response.data.success){
                        this.setState({ todos: response.data.todos})
                    }

                    else{
                        console.log("Error!")
                    }
                })
                .catch(err => console.log(err))
            }
            
            /*if(response.data.success){
                const newArray = this.state.todos.filter( (element) => {
                    if(element.id !== response.data.todo.id){ 
                        return element;
                    }
                })

                const newElement = response.data.todo;
                const resultArray = [newElement, ...newArray]
                
                this.setState({ todos: resultArray }) 
                
            }*/ 
            else{
                console.log("Error!")
            }
        })

        .catch(err => console.log(err))
        
    }

    onInputChange(taskText){
            this.setState({ taskText: taskText})
    }

    hideTaskList(){
        this.setState({isVisible: false})
    }
    
    showTaskList(){
        this.setState({isVisible: true})
    }

    render(){
        const uncheckedArrayList = this.state.todos.filter( (element) => {
            if(element.done !== true){ 
                return element;
            }
        })

        const checkedArrayList = this.state.todos.filter( (element) => {
            if(element.done !== false){
                return element;
            }
        })
        
        return(
            <div>
                <FormContainer onValueChange={this.onInputChange} onSubmit={this.createTask} />

                <TaskList helpers={this.handleCheckbox} 
                    onTaskUpdate ={this.updateTask} 
                    onTaskDelete={this.deleteTask} 
                    todosList={uncheckedArrayList}
                    isVisible={true}
                />

                <ActionBtn handleShowButton={this.showTaskList} handleHideButton={this.hideTaskList} />

                <TaskList helpers={this.handleCheckbox} 
                    onTaskUpdate ={this.updateTask} 
                    onTaskDelete={this.deleteTask} 
                    todosList={checkedArrayList} 
                    isVisible={this.state.isVisible}
                />
                
            </div>
        );
    }
}

ReactDOM.render(<App/> ,document.getElementById('root')
);