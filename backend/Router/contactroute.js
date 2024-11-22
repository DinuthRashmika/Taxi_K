const express = require('express');
const { addcontact, getAllContact } = require('../Controller/contactcontroller'); 

const Router = express.Router();

Router.post('/add', addcontact); 


module.exports = Router;