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
                    <a href="#beneficios"><span>Beneficios</span></a>
                    <a href="#ingredientes"><span>Ingredientes</span></a>
                    <a href="#reviews"><span>Reviews</span></a>
                </div>
                <div className="navb3">
                    <a href="https://wa.me/573106070752?text=¡Hola!%20Me%20interesa%20conseguir%20mi%20glow%20con%20EcoDrop%20🌿"
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}>
                        <span>Consigue tu Glow</span>
                    </a>
                    
                </div>
            </div>
        </>
    )
}

export default Navbar