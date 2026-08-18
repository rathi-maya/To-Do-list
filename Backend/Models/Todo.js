import mongoose from "mongoose"

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    status: {
       type: String,
       default: "Not completed"
    }

})

export const Todo = mongoose.model("Todo", TodoSchema)