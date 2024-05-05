import React from "react"
import sytles from './Modal-form.module.css'

const ModalForm = ({ message, onClose }) => {
    return (
        <div className={sytles.modal_overlay}>
            <div className={sytles.modal}>
                <form >
                    <div>
                        <label htmlFor="title">Título:</label>
                        <input
                            type="text"
                            id='title'
                            value={title}
                            onChange={(ev) => setTitle(ev.target.value)}
                        />
                    </div>
                </form>
                <button onClick={onClose}>Fechar</button>
            </div>
        </div>
    )
}

export default ModalForm