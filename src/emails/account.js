const mailgun = require("mailgun-js");
const DOMAIN = "sandbox0314858372af4093b48b44236fffe798.mailgun.org";

const mg = mailgun({apiKey: process.env.MAILGUN_API_KEY, domain: DOMAIN});


const sendWelcomeEmail = (email, name) => {
    const data = {
        from: "Mailgun Sandbox <postmaster@sandbox0314858372af4093b48b44236fffe798.mailgun.org>",
        to: email,
        subject: "Welcome!",
        text: `Welcome to the app,${name}.`
    }

    mg.messages().send(data, function (error, body) {
        console.log(body)
    })
}

const sendCancelationEmail = (email, name) => {
    const data = {
        from: "Mailgun Sandbox <postmaster@sandbox0314858372af4093b48b44236fffe798.mailgun.org>",
        to: email,
        subject: "Cancelation Email",
        text: `Goodbye ${name}. Hope to see you again`
    }

    mg.messages().send(data, function (error, body) {
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}

