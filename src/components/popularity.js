import React from "react";

export default class Popularity extends React.Component{   
    render(){
        return(
            <div className="decision">
                <button onClick = {this.props.trigger}>Check question popularity! </button>
            </div>
        )
    }
}