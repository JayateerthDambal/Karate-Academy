// const { request } = require('express');
const express = require('express');
const app = express();

const nodemailer = require("nodemailer");


const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.static('public'))
app.use(express.json())



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/contact.html')
})

app.post('/', (req, res) => {
    console.log(req.body)

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'rupeshpawar1704@gmail.com',
            pass: '@Rup45789512356'
        }
    })
    const mailOptions = {
        from: req.body.email,
        to: 'rupeshpawar1704@gmail.com',
        name: `Message from ${req.body.email}: ${req.body.subject}`,
        text: `Mr. ${req.body.name} just mailed you about the class in \n${req.body.city} and his mobile number is \n${req.body.phone} and his EMAIL Id is \n${req.body.email} he also left a message \n${req.body.message}`,

    }



    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('error');
        } else {
            console.log('Email sent: ' + info.response)
            res.send('success');
        }
    })
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})