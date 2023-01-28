
const jwt = require('jsonwebtoken')
const usersModel = require('../model/usersModel')
require("dotenv").config()

const auth = async (req,res,next)=>{
    try {
       const token =  req.params.token
       console.log(token +"fffffffffffffffffffffffffffffffff")
       if(!token) return res.json({message: "Invalid Authentication. no tocken"})
       const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
       console.log(decoded)
       if(!decoded) return res.json({message: "Invalid Authentication. invalied tocken"})
        const user = await usersModel.findOne({_id:decoded.id})
        req.user = user
       next()
    } catch (err) {
        return res.json({status:false,message:err.message})
    }
}
module.exports = auth