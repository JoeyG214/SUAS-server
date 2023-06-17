// Imports
const path = require('path')
const fs = require('fs')
const scriptsRouter = require('express').Router()
const { spawn } = require('child_process')

// Route Handlers
scriptsRouter.get('/capture-image', (req, res) => {
	// Runs the python script and returns a ChildProcess instance
  const captureImagePython = spawn('python', ['../scripts/capture-image.py'])

  // Stream from child process  is closed
  captureImagePython.on('close', (code) => {
    console.log(`Child Process closed all stdio with code ${code}`)

		const imagesDirectory = path.join(__dirname, '../images')

		fs.readdir(imagesDirectory, (error, files) => {
			if(error) {
				console.error(`An error has occurred: ${error}`)
				res.status(500).send(`An error has occured while trying to find the image`)
			} else {
				const image = files.find(file => path.extname(file).toLowerCase() === '.jpg')
				const imageUrl = `http://localhost:3001/images/${image}`

				if (imageUrl) {
						res.json({ url: imageUrl })
				} else {
						res.status(404).send('No Image Found')
				}
			}
		})
  })
})


// Export Router
module.exports = scriptsRouter
