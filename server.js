// server/server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/send-email', async (req, res) => {
    const { name, email, phone, address, recipientEmail, qrCodeImageUrl } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-email-password'
        }
    });

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: recipientEmail,
        subject: 'Your QR Code',
        html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Phone: ${phone}</p><p>Address: ${address}</p><img src="${qrCodeImageUrl}" alt="QR Code">`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ message: 'Error sending email: ' + error });
        }
        res.status(200).json({ message: 'Email sent: ' + info.response });
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
