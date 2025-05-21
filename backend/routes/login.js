const express = require("express")
const loginModel = require("../models/loginModel")

const router = express.Router()

const loginController = require("../controllers/loginController");

router.post("/",loginController.createUser)

router.delete("/",loginController.deleteUser)

router.patch("/",loginController.updateUser)

module.exports = router