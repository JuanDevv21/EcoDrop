import React from "react";
import "./Hero.css"

const Hero = () => {
    return(
        <>
            <div className="hero">
                <span className="herot1">BIOTECNOLOGIA CONSCIENTE</span>
                <h1>Tu piel, reimaginada por la biotecnologia</h1>
                <span className="herot2">Serum organico de alta potencia para un brillo natural y saludable. Ciencia y naturaleza en perfecta armonia</span>
                <div className="herot3">
                    <a href="https://wa.me/573106070752?text=¡Hola!%20Me%20interesa%20conseguir%20mi%20glow%20con%20EcoDrop%20🌿"
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}>
                        <span style={{border: "1px solid #B07D62" ,color: "white", backgroundColor: "#B07D62"}}>Consigue tu Glow</span>
                    </a>
                    <a href="#ingredientes"><span style={{border: "1px solid black", color: "black"}}>Ver ingredientes</span></a>
                </div>
            </div>
        </>
    )
}

export default Hero