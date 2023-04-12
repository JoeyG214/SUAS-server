const contactsRouter = require('express').Router()
const Contact = require('../models/contact')

contactsRouter.get("/", function(req, res){
    res.render("contact");
});

contactsRouter.post('/', async (req, res) => {
    console.log(req.body.email);
    const contact = new Contact({
        email: req.body.email,
        query: req.body.query,
    })

    try {
        const savedContact = await contact.save()
        res.status(201).json(savedContact).end()
    } catch(error) {
        console.error(error)
    }
})
  
module.exports = contactsRouter