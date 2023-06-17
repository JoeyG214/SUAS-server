// Imports
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
//const mongoose = require('mongoose')
const path = require('path')
const scriptsRouter = require('./controllers/scripts')

// Initialize Express App
const app = express()

// // Mongoose Connection
// mongoose.connect("mongodb://localhost:27017/suas", {
//    useNewUrlParser: true,
//    useUnifiedTopology: true
// })

// Middleware
app.use(cors())
app.use(express.static('dist'))
app.use(express.json())
app.use('/images', express.static(path.join(__dirname, 'images')))
app.use(morgan('dev'))

// Routes
app.use('/api/scripts', scriptsRouter)

// Export App
module.exports = app