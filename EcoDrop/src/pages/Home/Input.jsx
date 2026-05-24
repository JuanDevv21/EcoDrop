import React from "react";
import "./Input.css"

const Input = () => {
    return (
        <>
            <div class="input-container">
            <input placeholder="Nombre" class="input-field" type="text"/>
            <label for="input-field" class="input-label">Nombre</label>
            <span class="input-highlight"></span>
</div>
        </>
    )
}

export default Input
