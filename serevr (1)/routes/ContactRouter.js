const express = require("express");

const route = express.Router();

const contactController = require("../controllers/ContactController");
//const isauth = require("../middlewares/isauth");

//create contact
route.post("/",/*isauth,*/ contactController.createcontact);


module.exports = route;
