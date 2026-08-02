const mongoose = require("mongoose")

const TodoSchema = new mongoose.Schema({
    task: {
        type: mongoose.Schema.Types.String,
        required: true
    }
})

export const TodoModel = mongoose.model("todos", TodoSchema)