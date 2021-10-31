import React from "react";

export default class AddOptions extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this)
        this.state = {
            error:undefined
        }
    }
    handleSubmit(e){
        e.preventDefault();
        const new_option = e.target.elements.newentry.value.trim();
        const error = this.props.option(new_option);
        // error handling
        this.setState(()=> ({error}));
        if(!error){
            e.target.elements.newentry.value= null;
        }
    }

    render(){
        return(
            <div className="addoption">
                 {this.state.error && <p className='addoption__error'>{this.state.error}</p>}
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="newentry" placeholder ="Type your option"></input>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}