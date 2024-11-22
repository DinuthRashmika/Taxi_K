const mongoose = require('mongoose');


const contactSchema = new mongoose.Schema({
    fullname: {
        type: String, 
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

// Export the model
module.exports = mongoose.model('contacts', contactSchema);