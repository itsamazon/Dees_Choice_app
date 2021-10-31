import React from "react";
import Questions from "./Questions";
import Options from "./Options";

export default  class AllOptions extends React.Component{
    render(){
        return(
            <div className="optioncover">
                <div className="optionHeader">
                    <h3>Your Options</h3>
                    <button onClick={this.props.deleteAll}>Remove All</button>
                </div>
                <div className="options">
                    {this.props.options.length === 0 && <p> Please add all your possible options!</p>}
                    {this.props.options.map(
                        (option,index)=>
                            <Options
                                key = {option}
                                count = {index + 1}
                                optionText = {option}
                                singleDelete = {this.props.singleDelete}
                            />
                        )}
                </div>
            </div>
        )
    }
}