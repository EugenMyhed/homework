import React from "react";

const ActionBtn  = ({handlButton, isVisible}) => (
            <div className="form-container__checked-form-react checked-form-react">
                <button onClick={handlButton} className="checked-form__hide-react">{isVisible? "Hide Finished Items" : "Show Finished Items"}</button>
            </div>
        );

export default ActionBtn;