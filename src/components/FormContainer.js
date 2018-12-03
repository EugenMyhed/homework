import React from "react";

const FormContainer = ({onSubmit, onValueChange}) => (
           <form className="form-container__input-form input-form">
                <input onChange={(event) => onValueChange(event.target.value)} className="input-form__input-react" type="text" placeholder="What to do?" />
                <button onClick={(event) => onSubmit(event)}  className="input-form__btn-react" >Button</button>
           </form>
        );
export default FormContainer;