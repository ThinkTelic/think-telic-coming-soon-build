const nodemailer = require('nodemailer')
const sgTransport = require('nodemailer-sendgrid-transport')
require('dotenv').config()

const transporter = nodemailer.createTransport(sgTransport({
  auth: {
    api_key: process.env.SENDGRID_API_KEY
  }
}))

const send = ({ email, name, text }) => {
  const from = name && email ? `${name} <${email}>` : `${name || email}`
  const message = {
    to: process.env.COMPANY_EMAIL,
    from,
    subject: `Think Telic has a new message from ${from}`,
    html: `<b>${ text }</b>`
  }

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    )
  })
}

module.exports = send