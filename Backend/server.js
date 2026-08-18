import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import {Todo} from "./Models/Todo.js"
import cors from "cors"

dotenv.config()

const app = express();

app.use(cors())

app.use(express.json())

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Mongo connected successfully")
}).catch((error)=>{
    console.log("mongodb connection failed: ",error)
})


app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.post("/todos", async(req,res)=>{
    try{
        const newTodo = new Todo({
            title:req.body.title
        });
    
        const savedTodo = await newTodo.save();
        res.status(201).json(savedTodo);
    }
    catch(error){
        res.status(500).json({
      message: error.message
    });
    }
})

app.get("/todos", async(req,res)=>{
    try{
        const todos = await Todo.find();
        res.status(200).json(todos);
    }
    catch(error){
        res.status(500).json({
            message: error.message
        })
    }
})

app.delete("/todos/:id", async(req,res)=>{
    try{
        const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedTodo);
    }
    catch(error){
        res.status(500).json({
            message: error.message
        })
    }
})

app.put("/todos/:id", async(req,res)=>{
    try{
        const updatedTodo = await Todo.findByIdAndUpdate(req.params.id,{
            title:req.body.title,
            status: req.body.status,
        },
    {
        new: true
    });
      res.status(200).json(updatedTodo);
    }catch(error){
        res.status(500).json({message: error.message});
    }
})

app.listen(5000, () => {
  console.log("Server is running on port 5000....");
});