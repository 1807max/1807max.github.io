let express = require('express')
let app = express()
let {User} = require('./mode/login')
let cors = require('cors')
let bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())
app.listen(7000,()=>{
    console.log('后台启动成功：7000')
})
app.post('/login',(req,res)=>{
    // console.log(req.body)
    let user = req.body
    let {username} = user
    User.find({username},function(err,dacs){
        console.log(dacs.length,111)
        if(dacs.length){
            console.log('注册不成功')
            res.send({code:0})
        }else {
            console.log('注册成功')
            User.create(user)
            res.send({code:1})
        }
    })
})
app.post('/register',(req,res)=>{
    let user = req.body
    let {username,password} = user
    // console.log(username,password,'账户密码')
    User.find({username},function(err,dacs){
        if(err){
            res.send({code:0})
        }
        // console.log(dacs,111)
        if(dacs.length){
            // 返回的不是空数组
            if(dacs.find(v=>v.password=== password)){
                // console.log('用户输入成功')
                res.send({code:1})
            }
        }
        // console.log('用户输入错误')
        res.send({code:0})
    })
})