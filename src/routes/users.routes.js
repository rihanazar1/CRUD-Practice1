const express = require("express")
const userRouter = express.Router()
const userController = require("../controller/users.controller")

userRouter.post("/register", userController.registerController)

module.exports = userRouter;