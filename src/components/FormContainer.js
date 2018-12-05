import React, {Component} from "react";

export default class FormContainer extends Component{
     constructor(props){
          super(props);
          this.state = {
               taskText: ''
          }
          this.onInputChange = this.onInputChange.bind(this);
     }

     onInputChange(event){
          this.setState({taskText: event.target.value})
     }

     render(){
          return(
               <form className="form-container__input-form input-form">
                    <input onChange={(event) => this.onInputChange(event)} className="input-form__input-react" type="text" placeholder="What to do?" />
                    <button onClick={(event) => this.props.onSubmit(event, this.state.taskText)}  className="input-form__btn-react" >Button</button>
               </form>
          )
     }
}
