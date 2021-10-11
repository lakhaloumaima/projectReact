const express = require("express");
const route = express.Router();
const upload = require("../middlewares/upload");

const categoryController = require("../controllers/CategoryController");

const isauth = require("../middlewares/isauth");
const isadmin = require("../middlewares/isAdmin");

route.post("/",isauth , isadmin ,  upload.single("icon"), categoryController.createcategory);

route.put("/:id",isauth , isadmin , categoryController.updatecategoryinfo);
route.put("/image/:id",isauth , isadmin , upload.single('icon') ,categoryController.updateimagee) ;

route.delete("/:id", isauth, isadmin, categoryController.deletecategory);
route.get("/:id",  categoryController.getcategorybyid);
route.get("/",  categoryController.getallcategories);

module.exports = route;