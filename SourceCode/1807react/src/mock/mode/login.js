let mongoose = require('mongoose')
let conn = mongoose.createConnection('mongodb://localhost/1807max')
let User = conn.model('User',new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    createAt:{
        type:Date,
        default:Date.now
    }
}))
exports.User = User