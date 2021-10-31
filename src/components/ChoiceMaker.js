import React from "react";
import Header from "./Header";
import Questions from "./Questions";
import AddOptions from "./AddOptions";
import AllOptions from "./AllOptions";
import Decision from "./Decision";
import OptionModal from "./OptionModal";
import QuestionPopularity from "./QuestionPopularity";
import Popularity from "./popularity";

export default class ChoiceMaker extends React.Component{
    constructor(props){
        super(props)
        this.submitted = this.submitted.bind(this)
    }

    state = {
        options: [],
        answer: undefined,
        question:[],
        thedata: undefined,
        thequestion:[]
    }
    
    deleteALLOptions = ()=> {
            this.setState(()=>({options:[]}))
    }
    deleteSingleOption = (optionToRemove) => {
        this.setState((prevState) => (
            {options : prevState.options.filter(
                (newSelection) => newSelection !== optionToRemove
                )}) )
    }
    updateOption = (new_option) =>  {
        if(!new_option){
            return "Please, add a valid option!"
        }
        else if(this.state.options.indexOf(new_option) > -1){
            return "Option already exists!"
        }
        this.setState((prevState) => ({
                options: prevState.options.concat(new_option)
            })
        );
    }

    randomSelect = () => {
        let randomIndex = Math.floor((Math.random() * this.state.options.length) + 0);
        this.setState(() => ( 
            {answer:this.state.options[randomIndex]}
        ))
    }

    closeModal = () => {
        this.setState(()=> (
            {answer:undefined,
             thedata:undefined
            }
        ))
    }


    submitted(e){
        e.preventDefault();
        const new_option = e.target.elements.question.value.trim()
        let trigger = document.getElementById('body')
        if(new_option){
            this.setState(
                (prevState)=>({
                    question: prevState.question.concat(new_option)
                }) 
            )
            trigger.style.display="block";
            
        }
       
        else{
            return("Please ask a valid question")
        }
    }
    
    questionQuantity =() => {
        let thequestion=[];
        let len = this.state.question.length;
        for(let quest of this.state.question){
            let n = 0;
            for( let i = 0; i <  this.state.question.length; i++){
                if( this.state.question[i] == quest){n++}
            }

            this.setState((prevState)=>({
                thedata: n
            }))
            console.log(this.state.thedata)
            
        }
    }    

    render(){
        return(
            <div className="choiceapp">
                <Header /> 
                <div className="theBody">
                    <Questions
                    submit = {this.submitted}
                     />
                    <div style={{display:"none"}} id="body">
                        <AllOptions 
                        options = {this.state.options}
                        deleteAll ={this.deleteALLOptions}
                        singleDelete = {this.deleteSingleOption}
                        />
                        <AddOptions option ={this.updateOption}/> 
                        <Decision 
                        option ={this.state.answer}
                        randomSelect ={this.randomSelect}
                        />
                        <OptionModal
                        selected = {this.state.answer}
                        closeModal ={this.closeModal}
                        />
                        <Popularity
                        trigger = {this.questionQuantity}  
                        />
                        <QuestionPopularity
                         question = {this.state.thequestion}
                         data = {this.state.thedata}
                         closeModal={this.closeModal}
                         />
                    </div>
                </div>
            </div>
        )
    }
}