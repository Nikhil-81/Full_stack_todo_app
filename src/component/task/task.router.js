const Task=require("./task.module")
const express=require("express")
const Users=require("../user/user.module")
const app=express.Router("./task")

const AuthMiddleware=async(req,res,next)=>{
const [username,password]=req.headers.token.split(":")


let user=await Users.findOne({username})
if(user){
    if(password==user.password){
        req.acces=user._id
        next()
    }
    else{
        req.send("something went wrong")
    }
}
else{
    res.send("something went wrong")
}
} 

app.use(AuthMiddleware)


app.get("/",async(req,res)=>{
    
    let todos=await Task.find({user:req.acces})
    res.send(todos)
})


app.post("/",async(req,res)=>{
    try{
        await Task.create({...req.body})
        res.send("Task added succfully")
    }
    catch(err){
        res.send(err)
    }
})
app.delete("/:id",async(req,res)=>{
    const {id}=req.body
    let task=await Task.findOneAndDelete({id})
 res.send("task deleted")
})



module.exports=app