const express=require("express")
const Users=require("./user.module")
const app=express.Router("/user")



app.post("/singin",async(req,res)=>{

    const {name,username,password,gender}=req.body
    let user=await Users.findOne({username})
    try{

        if(user){
            res.send(`user wirh username ${username} already exist`)
        }
        else{
            Users.create(req.body)
            res.send(req.body)
        }
    }
    catch(err){
        res.send("Something went wrong")
    }
})


app.post("/login",async(req,res)=>{
    const {username,password}=req.body
    console.log(username,password)
    let user= await Users.findOne({username})
    console.log(user)
    try{
        if(user){
            if(password==user.password){
                let token=username+":"+password
                res.send(token)
            }
            else{
                res.send("password error")
            }
        }
        else{
            res.send("username not valid")
        }
    }
    catch(err){
        res.send("somenthing went wrong")
    }
})


module.exports=app