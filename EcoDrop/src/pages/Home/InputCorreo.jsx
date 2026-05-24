import React from "react";
import "./InputCorreo.css"

const InputCorreo = () => {
    return (
        <>
            <div class="input-container">
            <input placeholder="Correo electronico" class="input-field" type="text"/>
            <label for="input-field" class="input-label">Correo electrónico</label>
            <span class="input-highlight"></span>
            </div>
        </>
    )
}

export default InputCorreo