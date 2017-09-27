# node-mailer
> Simple mailing application using nodemailer and gmail

## Running Locally

```sh
$ git clone https://github.com/Rjoydip/node-mailer.git # or clone your own fork
$ cd node-mailer
$ npm install
$ node index
```

## Without xoauth2

```js

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: '<EMAIL SERVICE>', // gmail, yahoo etc.
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});

const mailOptions = {
    from: '<Fread fread@example.com>',
    to: 'to@example.com',
    subject: 'Sending Email using Node and Nodemailer',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) console.log(error);
    console.log('Email sent: ', info);
});
```

## With xoauth2

Using gmail OAuth2 service.

```js

const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');

const transporter = nodemailer.createTransport({
    service: '<EMAIL SERVICE>', // gmail, yahoo etc.
    auth: {
        xoauth2: xoauth2.createXOAuth2Generator({
            user: process.env.MAIL_USER,
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.SECRET_KEY,
            refreshToken: process.env.REFRESH_TOKEN,
            accessToken: process.env.ACCESS_TOKEN
        })
    }
});

const mailOptions = {
    from: '<Fread fread@example.com>',
    to: 'to@example.com',
    subject: 'Sending Email using Node and Nodemailer',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) console.log(error);
    console.log('Email sent: ', info);
});
```

***Note***
> Make sure if you appling gmail user and password as auth then enable less sequrity app permission.
