const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },

    email:{
        type: String,
        required: true
    },

    password:{
        type: String,
        required: true
    },

    profileImage:{
        type: String,
        required: true
    },

    posts:[
        {
            type: mongoose.Types.ObjectId,
            ref: "posts"
        }
    ]

})

const userModel = mongoose.model("user", userSchema)

module.exports = userModel