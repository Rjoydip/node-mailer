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

### Step I: Obtain OAuth 2.0 credentials at Google Developers Console
As stated here, you should:

* Go to the Google Developers Console.
* Select a project, or create a new one.
* In the sidebar on the left, expand APIs & auth. Next, click APIs. Select the Enabled APIs link in the API section to see a list of all your enabled APIs. Make sure that the “Gmail API” is on the list of enabled APIs. If you have not enabled it, select the Gmail API from the list of APIs (under Google Apps APIs), then select the Enable API button for the API.
* In the sidebar on the left, select Credentials.
* If you haven’t done so already, create your project’s OAuth 2.0 credentials by clicking Create new Client ID, and providing the information needed to create the credentials.

![Image 1](/docs/img1.png)

* Look for the Client ID and Client secret in the table associated with each of your credentials.

![Image 2](/docs/img2.png)

PAY SPECIAL ATTENTION TO specifying https://developers.google.com/oauthplayground as a Redirect URI when you create a new User in the console. Otherwise, you will have an error.

### Step II: Obtain the refresh token at Google OAuth2.0 Playground
* Go to the Google Oauth2.0 Playground.
* Click the Gear Button on the right-top. Set your Client ID and Client Secret obtained from theGoogle Developers Console, and select Access token location as Authorization header w/ Bearer prefix. Close this configuration overlay.

![Image 3](/docs/img3.png)

* Set up the scopes. Use https://mail.google.com/ as it’s the one need by nodemailer. Then click the Authorize APIs button.

![Image 4](/docs/img4.png)

* After OAuth2.0 authorization, exchange authorization code for tokens and your refresh token is ready-to-use. 

![Image 5](/docs/img5.png)

***Note***
> Make sure if you appling gmail user and password as auth then enable [lesssecureapps permission](https://myaccount.google.com/lesssecureapps).
    