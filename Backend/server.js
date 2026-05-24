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

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `Nueva suscripcion de ${user_name}`,
        html: `<p>Tienes un nuevo suscriptor:</p>
        <p><strong>Nombre:</strong> ${user_name}</p>
        <p><strong>Correo:</strong> ${user_email}</p>`
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error)
            return res.status(500).json({error: "Error al enviar el correo"})
        }
        res.status(200).json({message: "Suscripcion exitosa"})
    })
})

const PORT = 5000
app.listen(PORT, () => {
    console.log(`Servidor backend corriendo en http://localhost:${PORT}`)
})