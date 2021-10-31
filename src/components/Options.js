import React from "react";

const Options = (props) => ( 
            <div className="option">
                <p>{props.count}. {props.optionText}</p>
                <button onClick= {
                    (e) => props.singleDelete(props.optionText)}>Remove</button>
            </div>
)
export default Options  