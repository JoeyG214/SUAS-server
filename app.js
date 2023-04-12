// Imports
const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const contactsRouter = require('./controllers/contacts')
//const bodyParser = require("body-parser");
const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/suas", {
   useNewUrlParser: true,
   useUnifiedTopology: true
})

// Middleware
app.use(morgan('dev'))
app.use(cors())
app.use(express.static('build'))
app.use(express.json({ extended: false }))
//app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/contacts', contactsRouter)

// Export App
module.exports = app