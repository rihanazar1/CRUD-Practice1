require("dotenv").config()
const config = require("./src/config/config")
const connect = require("./src/DB/DB")
connect()

const app = require("./src/app")

app.listen(config.PORT, () => {
    console.log("server is running on " + config.PORT)
})