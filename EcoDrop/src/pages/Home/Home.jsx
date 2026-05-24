import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { useState } from "react";
import Hero from "./Hero";
import "./Home.css"
import Warning from "../../assets/alert-triangle.svg"
import Sin from "../../assets/x.svg"
import Microscopio from "../../assets/microscope.svg"
import Hoja from "../../assets/leaf-alt.svg"
import Foto from "../../assets/img/foto.png"
import Plus from "../../assets/plus.svg"
import Star from "../../assets/star.svg"
import Input from "./Input";
import InputCorreo from "./InputCorreo";
import toast, { Toaster } from 'react-hot-toast';
import ModalLegal from "../../components/ModalLegal";

const Home = () => {

    const [formData, setFormData] = useState({ user_name: "", user_email: "" });
    const [modalAbierto, setModalAbierto] = useState(null)


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const enviarCorreo = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch("http://localhost:5000/api/suscripcion", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            toast.success("¡Te has suscrito con éxito!", {
            style: { background: '#B07D62', color: '#fff', fontFamily: "Manrope", fontSize: "16px" }
        });
        setFormData({ user_name: "", user_email: "" });
    } else {
        toast.error("Hubo un error en el servidor.");
    }
    } catch (error) {
        console.error("Error de conexión:", error);
        alert("No se pudo conectar con el servidor backend.");
    }
};
    return (
        <>
            <Navbar></Navbar>
            <Hero></Hero>
            <div className="contenedor1">
                <h2>Evolución del cuidado</h2>
                <span>Dejamos atrás lo convencional para abrazar la nutrición célular avanzada.</span>
            </div>
            <div className="contenedor2" id="beneficios">
                <div className="contenedor2izq">
                    <img src={Warning} style={{width: "40px", marginTop: "40px"}}></img>
                    <p>Cosmética tradicional</p>
                    <div className="cont-items">
                        <div>
                            <img src={Sin}></img>
                            <span>Químicos agresivos</span>
                        </div>
                        <div>
                            <img src={Sin}></img>
                            <span>Irritación latente</span>
                        </div>
                        <div>
                            <img src={Sin}></img>
                            <span>Acción superficial</span>
                        </div>
                    </div>
                </div>
                <div className="contenedor2der">
                    <span className="etique">REVOLUCIÓN BIOTECH</span>
                    <p>EcoDrop Biotech: El futuro es celular</p>
                    <span className="etique2">Nutrición profunda que respeta el microbioma de tu piel. regenerando desde el interior con ingredientes 100% organicos</span>
                    <div className="atributos">
                        <div>
                            <img src={Microscopio}/>
                            <span>Nutrición celular</span>
                        </div>
                        <div>
                            <img src={Hoja}/>
                            <span>100% sostenible</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contenedor3" id="ingredientes">
                <div className="contenedor3izq">
                    <img className="imagen2" src={Foto} style={{width: "100%"}}></img>
                </div>
                <div className="contenedor3der">
                    <div className="contenedor3der1"><p>Ingredientes activos</p></div>
                    <div className="contenedor3der2">
                        <div>
                            <p>Kakadu Plum</p>
                            <span>Vitamina C pura</span>
                        </div>
                        <img src={Plus}></img>
                    </div>
                    <div className="contenedor3der2">
                        <div>
                            <p>Ácido Hialurónico</p>
                            <span>Hidratación profunda</span>
                        </div>
                        <img src={Plus}></img>
                    </div>
                    <div className="contenedor3der2">
                        <div>
                            <p>Té Verde</p>
                            <span>antioxidante</span>
                        </div>
                        <img src={Plus}></img>
                    </div>
                </div>
            </div>
            <div className="contenedor4" id="reviews">
                <div className="contenedor4t">
                    <p>Voces del Cambio Consciente</p>
                </div>
                <div className="contenedor4b">
                    <div className="comentario">
                        <div style={{marginBottom: "30px"}}>
                            <img src={Star}/><img src={Star}/><img src={Star}/><img src={Star}/><img src={Star}/>                    
                        </div>
                        <span className="cuerpocom">
                            "Nunca había sentido mi piel tan calmada y radiante al mismo tiempo. la textura es un sueño, se absorbe al instante"
                        </span>
                        <div className="persona">
                            <div className="ftperfil"></div>
                                <div className="descpersona">
                                <span>Sofia Rodriguez</span>
                                <span>Cliente verificada</span>
                            </div>
                        </div>
                    </div>
                    <div className="comentario">
                        <div style={{marginBottom: "30px"}}>
                            <img src={Star}/><img src={Star}/><img src={Star}/><img src={Star}/><img src={Star}/>                    
                        </div>
                        <span className="cuerpocom">"Resultados visibles en menos de dos semanas. Mi rosácea ha disminuido notablemente. Ciencia real en cada gota"</span>
                        <div className="persona">
                            <div className="ftperfil"></div>
                                <div className="descpersona">
                                <span>Elena Montealegre</span>
                                <span>Cliente verificada</span>
                            </div>
                        </div>
                    </div>
                    <div className="comentario">
                        <div style={{marginBottom: "30px"}}>
                            <img src={Star}/><img src={Star}/><img src={Star}/><img src={Star}/><img src={Star}/>                    
                        </div>
                        <span className="cuerpocom">"Buscaba algo honesto y eficaz. EcoDrop ha superado mis expectativas. Mi piel se siente nutrida y fuerte"</span>
                        <div className="persona">
                            <div className="ftperfil"></div>
                            <div className="descpersona">
                                <span>Carlos Torreon</span>
                                <span>Cliente verificada</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contenedor5">
                <div className="contenedor5l">
                    <h2>Únete al cuidado Consciente</h2>
                    <span>Suscribete para recibir consejos de biotecnologia aplicada a la piel y obten un 15% de descuento en tu primera compra</span>
                </div>
                <div className="contenedor5r">
                    <form onSubmit={enviarCorreo}>
                        <Input value={formData.user_name} onChange={handleChange}></Input>
                        <InputCorreo value={formData.user_email} onChange={handleChange}></InputCorreo>
                        <button className="enviarForm">Suscribirme ahora</button>
                    </form>
                </div>
            </div>

            <div className="piePagina">
                <div className="piePaginal">
                    <p>EcoDrop Biotic Glow</p>
                    <span>© 2025 EcoDrop Biotic Glow. Serenidad tecnica en el cuidado de la piel</span>
                </div>
                <div className="piePaginar">
                    <span onClick={() => setModalAbierto('privacidad')} style={{cursor:"pointer"}}>Politica de privacidad</span>
                    <span onClick={() => setModalAbierto('terminos')} style={{cursor: "pointer"}}>Terminos y condiciones</span>
                    <span onClick={() => setModalAbierto('envios')} style={{cursor: "pointer"}}>Envios</span>
                    <span>Instagram</span>
                    <span>Linkedin</span>
                </div>
            </div>

            <ModalLegal isOpen={modalAbierto === 'privacidad'}
            onClose={() => setModalAbierto(null)}
            title="POLITICA DE PRIVACIDAD">
                <p>En EcoDrop Biotic Glow, valoramos la privacidad de tu piel y de tus datos. Esta política describe cómo manejamos tu información:</p>
                <h4>1. Recopilación de Información</h4>
                <p>Recogemos únicamente tu nombre y correo electrónico cuando te suscribes voluntariamente a nuestro boletín de biotecnología aplicada.</p>
                <h4>2. Uso de los datos</h4>
                <p>Tus datos se utilizan exclusivamente para enviarte consejos de salud cutánea, lanzamientos de productos de nutrición celular avanzada y cupones de descuento. Nunca venderemos ni compartiremos tu información con terceros.</p>
                <h4>3. Seguridad</h4>
                <p>Implementamos medidas de seguridad técnicas (encriptación SSL) para que tu correo esté completamente protegido en nuestros servidores.</p>
                <h4>4. Derechos</h4>
                <p>Puedes darte de baja en cualquier momento respondiendo a cualquiera de nuestros correos con la palabra "Baja".</p>
            </ModalLegal>

            <ModalLegal isOpen={modalAbierto === 'terminos'}
            onClose={() => setModalAbierto(null)}
            title="Terminos y condiciones">
                <p>Bienvenido a EcoDrop Biotic Glow. Al navegar por este sitio web y utilizar nuestros servicios, aceptas las siguientes condiciones:</p>
                <h4>1. Propiedad Intelectual</h4>
                <p>Todo el contenido, marcas, logotipos y textos científicos explicados en este sitio son propiedad exclusiva de EcoDrop Biotech y están protegidos por leyes de propiedad intelectual.</p>
                <h4>2. Uso Informativo</h4>
                <p>La información sobre biotecnología celular proporcionada en esta página tiene fines educativos e ilustrativos. No sustituye el diagnóstico ni tratamiento de un dermatólogo profesional.</p>
                <h4>3. Cupones y Promociones</h4>
                <p>El código de descuento del 15% recibido por suscripción es válido únicamente para la primera compra de productos EcoDrop y no es acumulable con otras promociones vigentes.</p>
            </ModalLegal>

            <ModalLegal isOpen={modalAbierto === 'envios'}
            onClose={() => setModalAbierto(null)}
            title="Politica de Envios y Entregas">
                <p>Queremos que la revolución biotecnológica llegue a tu puerta de la forma más rápida y segura posible:</p>
                <h4>1. Tiempos de Procesamiento</h4>
                <p>Una vez confirmado tu pedido a través de nuestro canal de atención (WhatsApp), preparamos tus productos orgánicos en un plazo de 24 a 48 horas hábiles para garantizar su frescura celular.</p>
                <h4>2. Plazos de Entrega</h4>
                <p>Los envíos nacionales toman entre 2 y 5 días hábiles, dependiendo de tu ciudad principal. Te proporcionaremos un número de guía para que puedas rastrear tu pedido.</p>
                <h4>3. Costo del Envío</h4>
                <p>El valor del envío se calcula al momento de coordinar la entrega por WhatsApp. Contamos con tarifas planas muy accesibles y envío gratuito por compras superiores al monto mínimo estipulado en el chat.</p>
                <h4>4. Novedades y Devoluciones</h4>
                <p>Al tratarse de cosmética avanzada orgánica, si tu producto llega con alguna novedad de fábrica o daño por la transportadora, cuentas con 5 días calendario para reportarlo y gestionaremos un cambio inmediato sin costo.</p>
            </ModalLegal>
            <Toaster position="top-right" reverseOrder={false} />
        </>
    )
}

export default Home