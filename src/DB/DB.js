const mongoose = require("mongoose");
const config = require("../config/config")

const connect_DataBase = () =>{
    mongoose.connect(config.MONGODB)

    .then(() => {
        console.log("Connected Successfully")
    }).catch((err) => {
        console.log("connection fail")
    })
}

module.exports = connect_DataBase