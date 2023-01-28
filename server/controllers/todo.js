const todoModel = require("../model/todoModel")

module.exports = {
    getTask:async(req,res)=>{
        try {
            let {id} = req.body
            let todo = todoModel.find({user:id})
            res.json({status:true,data:todo})
        } catch (error) {
            res.json({status:false,message:error.message})
        }
    },
    addTask:async(req,res)=>{
        try {
            let {tocken,user,Title,Description} = req.body
            const {token} = req.params;
            
            console.log(token)
            let todo = new todoModel({user,Title,Description}).save()
            res.json({status:true,message:'Task added'})
        } catch (error) {
            res.json({status:false,message:error.message})
        }
    },
    deleteTask:async(req,res)=>{
        try {
            let {id} = req.params
            todoModel.findOneAndRemove({_id:id})
            res.json({status:true,message:'Task Deleted'})
        } catch (error) {
            res.json({status:false,message:error.message})
        }
    },
}