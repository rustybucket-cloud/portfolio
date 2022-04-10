require("dotenv").config()
const nodemailer = require("nodemailer")

async function sendEmail(name, email, message) {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD
        }
    })

    const toRecipientOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: "Thank You For Contacting Me",
        text: name + ",\n\nThank you for contacting me. I will get back to you as soon as possible. \n\nJacob Patton"
    }
    const toMeOptions = {
        from: process.env.EMAIL,
        to: process.env.PERSONAL_EMAIL,
        subject: `Message on portfolio site from ${name}`,
        text: `name: ${name} \nemail: ${email} \nmessage: ${message}`
    }

    const sendToRecipient = () => {
        return new Promise((resolve, reject) => { 
            transporter.sendMail(toRecipientOptions, (err, info) => {
                if (err) reject(err)
                else resolve(true);
            })
        })
    }
    const sendToMe = () => {
        return new Promise((resolve, reject) => {
            transporter.sendMail(toMeOptions, (err, info) => {
                if (err) reject(err)
                else resolve(true);
            })
        })
    }

    const hasSentToRecipient = await sendToRecipient()
    const hasSentToMe = await sendToMe()

    return [hasSentToRecipient, hasSentToMe]
}
exports.handler = async (event, context) => {
    const { queryStringParameters } = event
    const { name, email, message }= queryStringParameters
    let hasSentToRecipient
    let hasSentToMe
    try {
        [ hasSentToRecipient, hasSentToMe ] = await sendEmail(name, email, message)
        
    } catch (err) {
        return {
            statusCode: 300,
            body: JSON.stringify({error: err})
        }
    } finally {
        return {
            statusCode: 200,
            hasSentToRecipient,
            hasSentToMe
        }
    }
}