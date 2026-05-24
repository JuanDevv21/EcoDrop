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
                    <span style={{border: "1px solid #B07D62" ,color: "white", backgroundColor: "#B07D62"}}>Consigue tu Glow</span>
                    <span style={{border: "1px solid black"}}>Ver ingredientes</span>
                </div>
            </div>
        </>
    )
}

export default Hero