const { default: mongoose } = require("mongoose");


const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 25
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
},{
    timestamps:true
})

module.exports = mongoose.model('user', schema)