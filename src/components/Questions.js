import React from "react";

export default class Questions extends React.Component{
    
    render(){
        return(
            <div>
                <form className="question" onSubmit={this.props.submit}>
                    <input type="text" name="question" placeholder="Type your question"/>
                    <button>Ask To Start</button>
                </form>   
            </div> 
        )
    }
}