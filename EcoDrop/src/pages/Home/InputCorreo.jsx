import React from "react";
import "./InputCorreo.css"

const InputCorreo = ({value, onChange}) => {
    return (
        <>
            <div className="input-container">
            <input placeholder="Correo electronico" className="input-field" type="email" name="user_email" value={value} onChange={onChange}/>
            <label for="input-field" className="input-label">Correo electrónico</label>
            <span className="input-highlight"></span>
            </div>
        </>
    )
}

export default InputCorreo