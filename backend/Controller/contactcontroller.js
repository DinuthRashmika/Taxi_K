const Contact = require('../Model/contactmodel'); 

exports.addcontact = async (req, res) => {
    try {
        const newContact = new Contact(req.body); 
        await newContact.save();
        res.status(200).json({ success: 'Insert successful' });
    } catch (error) {
        res.status(400).json({ error: error.message });
        console.log("Error:", error);
    }
}

