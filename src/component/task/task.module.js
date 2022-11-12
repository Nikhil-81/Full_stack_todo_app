const mongoose=require("mongoose")
const TASK=new mongoose.Schema({

title:{type:"String",required:"true"},
status:{type:"Boolean",required:"true"},
user:{type: mongoose.Schema.Types.ObjectId,ref:'user'}
})


const Tasks=mongoose.model("Task",TASK)

module.exports=Tasks