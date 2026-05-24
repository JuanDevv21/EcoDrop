const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
})

app.post('/api/suscripcion', (req, res) => {
    const {user_name, user_email} = req.body

    const codigoDescuento = `EcoCell-${Math.random().toString(36).substring(2, 6).toUpperCase()}`

    const mailAdminOptions = {

        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `Nueva suscripcion de ${user_name}`,
        html: `<p>Tienes un nuevo suscriptor en EcoDrop:</p>
        <p><strong>Nombre:</strong> ${user_name}</p>
        <p><strong>Correo:</strong> ${user_email}</p>`
    }

    const mailClienteOptions = {
        from: process.env.EMAIL_USER,
        to: user_email,
        subject: `Te damos la bienvenida a EcoDrop, ${user_name}`,
        html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #f0f0f0; border-radius: 8px;">
                <h2 style="color: #2e7d32; text-align: center;">¡Gracias por unirte al Cuidado Consciente!</h2>
                <p>Hola <strong>${user_name}</strong>,</p>
                <p>Ya eres parte de la evolución del cuidado de la piel. A partir de ahora, recibirás consejos exclusivos sobre biotecnología aplicada a la salud cutánea y lanzamientos de nuestra línea celular avanzada.</p>
                
                <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
                
                <div style="background-color: #f1f8e9; padding: 20px; text-align: center; border-radius: 6px;">
                    <p style="margin: 0; font-size: 16px; color: #33691e;">Aquí tienes tu beneficio de bienvenida:</p>
                    <h3 style="margin: 10px 0; color: #2e7d32; font-size: 24px;">15% DE DESCUENTO</h3>
                    <p style="margin: 5px 0; font-size: 14px; color: #555;">Usa este código al finalizar tu primera compra:</p>
                    <span style="display: inline-block; background: #2e7d32; color: white; padding: 10px 20px; font-weight: bold; font-size: 18px; border-radius: 4px; letter-spacing: 2px; margin-top: 10px;">
                        ${codigoDescuento}
                    </span>
                </div>
                
                <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
                
                <p style="font-size: 12px; color: #888; text-align: center; margin: 0;">
                    © 2026 EcoDrop Biotic Glow. Serenidad técnica en el cuidado de la piel.
                </p>
            </div>`
    }

    transporter.sendMail(mailClienteOptions, (error, info) => {
        if (error) {
            console.log("error al enviar al cliente",error)
            return res.status(500).json({error: "Error al procesar la suscripcion"})
        }
        res.status(200).json({message: "Suscripcion y correo de bienvenida enviados"})
    })

    transporter.sendMail(mailAdminOptions, (error) => {
        if(error) console.log("Error al enviar al administrador", error)
    })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Servidor backend corriendo en http://localhost:${PORT}`)
})