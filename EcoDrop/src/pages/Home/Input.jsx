import React from "react";
import "./Input.css"

const Input = ({value, onChange}) => {
    return (
        <>
            <div className="input-container">
            <input placeholder="Nombre" className="input-field" type="text" name="user_name" value={value} onChange={onChange}/>
            <label for="input-field" className="input-label">Nombre</label>
            <span className="input-highlight"></span>
</div>
        </>
    )
}

export default Input
