const userModel = require("../model/users.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const config = require("../config/config")

module.exports.registerController = async (req , res) =>{

    try {
        const {username, email, profileImage, password} = req.body;

        if(!username){
            res.status(400).json({message: "Username is Required"})
        }

        if(!email){
            res.status(400).json({message:"Email is Required"})
        }

        if(!profileImage){
            res.status(400).json({message : "ProfileImage is Required"})
        }

        if(!password){
            res.status(400).json({message : "Password is Required"})
        }

        const isExist = await userModel.findOne({
            $or:[
                {username: username},
                {email: email}
            ]
        })

        if(!isExist){
            res.status(400).json({message: "User Already Exist"})
        }

        const hashPassword = await bcrypt.hash(password, 10)

        const userCreate = await userModel.create({
            username : username,
            email : email,
            profileImage : profileImage,
            password : hashPassword
        })

        const tken = jwt.sign({
            _id : userCreate._id,
            email : userCreate.email
        }, config.JWT_SECRET)

    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Internal Server Error"})
    }


}