import React from "react";
import AddTextButton from "./AddTextButton";

const FormContainer = ({restPostData, onValueChange, handleButton}) => (
           <form onSubmit={handleButton} className="form-container__input-form input-form">
                <input onChange={onValueChange} className="input-form__input-react" type="text" placeholder="What to do?" />
                <AddTextButton postData={(event) =>restPostData(event)} />
           </form>
        );
export default FormContainer;