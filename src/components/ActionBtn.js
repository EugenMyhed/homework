import React from "react";

const ActionBtn  = ({handleShowButton, handleHideButton}) => (
            <div className="form-container__checked-form-react checked-form-react">
                <button onClick={handleHideButton} className="checked-form__hide-react">Hide Finished Items</button>
                <button onClick={handleHideButton} className="checked-form__show-react">Show Finished Items</button>
            </div>
        );

export default ActionBtn;