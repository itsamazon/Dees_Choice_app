import React from "react";

export default class Decision extends React.Component{   
    render(){
        return(
            <div className="decision">
                <button onClick = {this.props.randomSelect}>Make a Decision! </button>
            </div>

        )
    }
}