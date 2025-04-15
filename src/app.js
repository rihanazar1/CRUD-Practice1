const express = require("express")
const app = express()
const userRouter = require("../src/routes/users.routes")

app.use(express.json)
app.use(express.urlencoded({extended: true}))

app.use("/users", userRouter)

module.exports = app;