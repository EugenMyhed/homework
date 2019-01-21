import React, {Component} from "react";
import URL from "./config"
import FormContainer from "./FormContainer"
import TaskList from "./TaskList"
import ToggleFinishedTasksVisibility from "./ToggleFinishedTasksVisibility";
import axios from "axios";
import { connect } from 'react-redux'
import {setTask, setTextBoxValue, setVisibilityFilter} from "../actions/index"

class App extends Component{

    constructor(props) {
        super(props);

        this.state = {
            todos: [],
            isVisible: true
        };

        this.createTask = this.createTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.updateTask = this.updateTask.bind(this);
        this.handleListVisibility = this.handleListVisibility.bind(this);    
      }

    componentDidMount(){
        axios.get(`${URL}/todos`)
        .then((response) => {
            if(response.data.success){
                const todoArray = response.data.todos;
                this.props.setTaskFunction(todoArray);
        
            }
            else{
                console.log("Error!")
            }
        })
        .catch((err) => console.log(err))
    }
    
    createTask(){
        axios.post(`${URL}/todos`, {
                text: this.props.textBox
        })
        .then( response => {
            if(response.data.success){
                axios.get(`${URL}/todos`)
                .then((response) =>{
                    if(response.data.success){
                        this.props.setTaskFunction(response.data.todos);
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
        axios.delete(`${URL}/todos/${el.id}`)
        .then(response =>{
            if(response.data.success){
                axios.get(`${URL}/todos`)
                    .then((response) =>{
                        if(response.data.success){
                            this.props.setTaskFunction(response.data.todos);
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
         axios.put(`${URL}/todos/${el.id}`,{
            text: el.text, 
            done: event.target.checked
        })
        .then((response) => {

            if(response.data.success){
                axios.get(`${URL}/todos`)
                .then((response) =>{
                    if(response.data.success){
                        this.props.setTaskFunction(response.data.todos);
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

    handleListVisibility(){
        this.props.setVisibility(!this.props.isVisible)
    }

    render(){
        const uncheckedArrayList = this.props.todos.filter( (element) => {
            if(element.done !== true){ 
                return element;
            }
        })
        const checkedArrayList = this.props.todos.filter( (element) => {
            if(element.done !== false){
                return element;
            }
        })
        
        return(
            <div>
                <FormContainer onSubmit={this.createTask}  setTask={this.props.setTextFunction}/>

                <TaskList  
                    onTaskUpdate ={this.updateTask} 
                    onTaskDelete={this.deleteTask} 
                    todosList={uncheckedArrayList}
                    isVisible
                />

                <ToggleFinishedTasksVisibility 
                    isVisible={this.state.isVisible}
                    toggleVisibility={this.handleListVisibility} />

                <TaskList 
                    onTaskUpdate ={this.updateTask} 
                    onTaskDelete={this.deleteTask} 
                    todosList={checkedArrayList} 
                    isVisible={this.props.isVisible}
                />
            </div>
        );
    }
}


const mapStateToProps = (state) =>{
    return {
        isVisible: state.todoList.isVisible, 
        textBox: state.todoList.textBox,
        todos: state.todoList.todos
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setTextFunction: taskText =>{
            dispatch(setTextBoxValue(taskText))
        }, 
        setTaskFunction: todoArray =>{
            dispatch(setTask(todoArray))
        },
        setVisibility: isVisible =>{
            dispatch(setVisibilityFilter(isVisible))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);