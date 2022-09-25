import nodemailer from 'nodemailer'
import 'dotenv/config'

export async function get({ params, request  }) {
  console.log(request)
  let transporter = nodemailer.createTransport({
    host: "outlook.live.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'jimmyjonesrusty@outlook.com',
      pass: 'poPSTJo5bMtrHQt6',
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Nancy" <jimmyjonesrusty@outlook.com>', // sender address
    to: "amclemo@yahoo.com", // list of receivers
    subject: "Happy Birthday!", // Subject line
    // text: "Hello world?", // plain text body
    html: "<html><p>Happy birthday! Here's a special present!</p><a href=\"https://catsnthing.com/IAKT4G\">https://amazon.com/gifts</a></html>", // html body
  });

  return new Response({ status: 200 })
}

export async function post({ request }) {
  console.log(request.body)

  return new Response({ status: 200 })
}