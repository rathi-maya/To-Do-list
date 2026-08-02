const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const {TodoModel} = require("./Models/TodoSchema")

const app = express()
app.use(cors)
app.use(express.json)

mongoose.connect("mongodb://127.0.0.1:27017/To-Do")

app.post("/add", (req,res)=>{
    const task = req.body.task;
    TodoModel.InputBox({
        task: task
    }).then(result=> res.json(result))
    .catch(err => console.log(err))

})

app.listen(3000, ()=>{
    console.log("server is running")
})