import React, {Component} from "react";

export default class FormContainer extends Component{
     constructor(props){
          super(props);
          this.state = {
               taskText: ''
          }
          this.onInputChange = this.onInputChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
     }

     handleSubmit(event){
          event.preventDefault();
     }

     onInputChange(event){
          return this.props.setTask(event.target.value)
     }

     render(){
          return(
               <form onSubmit={this.handleSubmit} className="form-container__input-form input-form">
                    <input 
                         onChange={(event) => this.onInputChange(event)} 
                         className="input-form__input-react" 
                         type="text" 
                         placeholder="What to do?" />
                    <button 
                         type="submit"
                         onClick={this.props.onSubmit}
                         className="input-form__btn-react" >
                         Button
                    </button>
               </form>
          )
     }
}
