const express = require('express');
const { addcontact, getAllContact } = require('../Controller/contactcontroller'); 

const Router = express.Router();

Router.post('/add', addcontact); 
Router.get('/getall', getAllContact);

module.exports = Router;