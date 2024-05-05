import React from "react"
import sytles from './Modal.module.css'

const Modal = ({ message, onClose }) => {
    return (
        <div className={sytles.modal_overlay}>
            <div className={sytles.modal}>
                <p>{message}</p>
                <button onClick={onClose}>Fechar</button>
            </div>
        </div>
    )
}

export default Modal