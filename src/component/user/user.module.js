const mongoose =require("mongoose")
// const {Schema}=require("mongoose")
const USER=new mongoose.Schema({
        Name:{type:"String",required:"true"},
        username:{type:"String",require:"true"},
        password:{type:"String",require:"true"},
        gender:{type:"string",require:"true"}
})

const Users=mongoose.model("user",USER)

module.exports=Users

