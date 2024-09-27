// mongoose schema 

import mongoose, { mongo } from "mongoose";

mongoose.connect("mongodb+srv://ashishkarakoti:UngcJ3JmSQ9Gaqf0@cluster0.fairc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
 
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

export default todo
