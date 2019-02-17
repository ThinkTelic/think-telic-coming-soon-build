const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000

const app = next({ dev })
const handle = app.getRequestHandler()

const mailer = require('./app/mailer')

app.prepare().then(() => {
  const server = express()

  server.use(express.json())
  server.use(express.urlencoded({ extended: false }))

  server.post('/api/contact', (req, res) => {
    const { email, name , message } = req.body
    if(email && name && message) {
      mailer({ email, name, text: message })
      .then(() => res.send({ message: 'Thanks. Talk soon.' }))
      .catch((error) => res.status(500).send(error) && console.log('failed', error))
    } else {
      res.status(500).send("Error")
    }
  
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Read on http://localhost:${port}`)
  })
})
