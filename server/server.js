const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
app.use(cors());

let transporter = nodemailer.createTransport({
    service: process.env.EMAIL,
    auth: {
        type: "OAuth2",
        user: process.env.EMAIL,
        pass: process.env.WORD,
        clientId: process.env.OAUTH_CLIENT_ID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
});

transporter.verify((err, success) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`=== Server is ready to take messages: ${success} ===`);
    }
});

app.post("/send", function (req, res) {
    let mailOptions = {
        from: `${req.body.email}`,
        to: process.env.EMAIL,
        subject: `Message from: ${req.body.email}`,
        text: `${req.body.message}`,
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            res.json({
                status: "fail",
            });
        } else {
            console.log("== Message Sent ==");
            res.json({
                status: "success",
            });
        }
    });
});

const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
