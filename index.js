"use strict";

require('dotenv').config();

const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        // xoauth2: xoauth2.createXOAuth2Generator({
        //     user: process.env.MAIL_USER,
        //     clientId: process.env.CLIENT_ID,
        //     clientSecret: process.env.SECRET_KEY,
        //     refreshToken: process.env.REFRESH_TOKEN,
        //     accessToken: process.env.ACCESS_TOKEN
        // })
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});

const mailOptions = {
    from: 'joydipand@gmail.com',
    to: 'joydipand@gmail.com',
    subject: 'Sending Email using Node and Nodemailer',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) console.log(error);
    console.log('Email sent: ', info);
});