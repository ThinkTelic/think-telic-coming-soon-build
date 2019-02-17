const nodemailer = require('nodemailer')
const sgTransport = require('nodemailer-sendgrid-transport')
const {COMPANY_EMAIL, SENDGRID_API_KEY} = require('../config/stringConstant')

const transporter = nodemailer.createTransport(sgTransport({
  auth: {
    api_key: SENDGRID_API_KEY
  }
}))

const send = ({ email, name, text }) => {
  const from = name && email ? `${name} <${email}>` : `${name || email}`
  const message = {
    to: COMPANY_EMAIL,
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