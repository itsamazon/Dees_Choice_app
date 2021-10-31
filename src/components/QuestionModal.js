import React from "react";
import Modal from "react-modal";


const QuestionModal = (props) => (
    <Modal
    isOpen = {props.value}
    closeTimeoutMS={200}
    onRequestClose={props.closeModal}
    className="modal"
    >
    <h3 className="modal__header">The number of times this question has been asked is : </h3>
    <p className="modal__body">{props.value}</p>
    <button onClick={props.closeModal}>Okay</button>
    </Modal>
)

export default QuestionModal;
