let bcrypt = require("bcrypt");
const { generateToken } = require("../config/jwt");
const usersModel = require("../model/usersModel");
module.exports = {
    signup:async(req,res)=>{
        try {
            let {name,email,password} = req.body
            password = await bcrypt.hash(password, 10);
            let user = await new usersModel({name,email,password}).save()
            res.json({status:true,message:'Signup Success'})
        } catch (error) {
            res.json({status:false,message:error.message})
        }
    },
    login:async(req,res)=>{
        try {
            let {email,password} = req.body;
            const user = await usersModel.findOne({email:email})
            if(user){
                const token = await generateToken(user._id)
                res.cookie("jwt", token)
                res.json({status:true,message:'login Success',token});
            }else{
                res.json({status:"email does not exist please login"})
            }
        } catch (error) {
            res.json({status:false,message:error.message})
        }
    }
}