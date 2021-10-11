// http://localhost:5000/api

// /users/

// post, get, put , delete

// https://join.skype.com/JS2KDL5A0Xr2

const express = require("express");

const route = express.Router();

const UserController = require("../controllers/UserController");

const upload = require('../middlewares/upload')

const isAuth = require("../middlewares/isauth");

const isAdmin = require("../middlewares/isAdmin");

//create user public route
route.post("/", UserController.createuser);
//get user by id private route
route.get("/me", isAuth, UserController.getuserbyid);
// upadte user by id
route.put("/:id", isAuth, UserController.updateUser);

//delete user
route.delete("/:id", isAuth, isAdmin, UserController.deleteuser);
//get all users
route.get("/", isAuth, isAdmin, UserController.getallusers);
//authenticate user public route
route.post("/login", UserController.authenticate);
//upload avatar
route.put("/uploadavatar", isAuth, upload.single('avatar'),  UserController.uploadavatar);

module.exports = route;

// create admin et client => admin etclient avec password crypted
// authenticate api users/login (admin,client)
//consommer delete user api