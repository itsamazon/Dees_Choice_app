import Modal from "react-modal";

const OptionModal = (props) => (
    <Modal
    isOpen = {props.selected}
    closeTimeoutMS={200}
    onRequestClose={props.closeModal}
    className="modal"
    >
    <h3 className="modal__header">Best Choice for you is: </h3>
    {props.selected && <p className="modal__body">{props.selected}</p>}
    <button onClick={props.closeModal}>Okay</button>
    </Modal>
)

export default OptionModal;