const express=require("express")
// const mongoose=require("mongoose")
const connect=require("./config/config")
require("dotenv").config()
const PORT=process.env.PORT
const cors=require("cors")
const app=express()

const userrout=require("./component/user/user.router")
const taskrout=require("./component/task/task.router")


app.use(express.json())
app.use(cors())
app.use("/user",userrout)
app.use("/task",taskrout)



app.listen(PORT,async()=>{
    connect()
    console.log(`server runing at  http://localhost:${PORT}`)
})


