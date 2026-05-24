import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    return (
        <>
            <div className="navb">
                <div className="navb1">
                    <p>EcoDrop Biotic Glow</p>
                </div>
                <div className="navb2">
                    <span>Beneficios</span>
                    <span>Ingredientes</span>
                    <span>Reviews</span>
                </div>
                <div className="navb3">
                    <span>Consigue tu Glow</span>
                </div>
            </div>
        </>
    )
}

export default Navbar