const { default: mongoose } = require("mongoose");


const schema = new mongoose.Schema({
    user:{
        type:mongoose.Types.ObjectId,
        ref:'user'
    },
    Title: {
        type: String,
        required: true,
        maxlength: 25
    },
    Description: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        default:false
    },
},{
    timestamps:true
})

module.exports = mongoose.model('todo', schema)