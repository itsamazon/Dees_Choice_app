import React from "react";
import QuestionModal from "./QuestionModal";

export default class QuestionPopularity extends React.Component{
    
    render(){
      return(
        <div>
                    <QuestionModal
                       value = {this.props.data}
                       closeModal = {this.props.closeModal}
                    />
        </div>
      )
    }
}