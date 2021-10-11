/*
const Contact = require("../models/Contact");
//const User = require("../models/User");

module.exports = {
  createcontact: (req, res) => {
       Contact.create(req.body, (err, contact) => {
         if (err) {
           res.status(500).json({
             message: "contact not created " + err,
             data: null,
           });
         } else {
           res.status(201).json({
             message: "contact created successfuly ",
             data: contact,
           });
         }
       });
  },


  };

  */