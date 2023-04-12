const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    email: String,
    query: String,
 }); 

 const Contact = mongoose.model("Contact", contactSchema);

 module.exports = Contact