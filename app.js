// Imports
const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')

// Middleware
app.use(morgan('dev'))
app.use(cors())
app.use(express.static('build'))
app.use(express.json())

// Routes


// Export App
module.exports = app