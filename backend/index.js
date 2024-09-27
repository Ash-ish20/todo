import express from 'express'
import {createTodo} from './types.js'
import todo from './db.js'
const app = express()

app.use(express.json())

app.post('/todo',async (req, res)=>{
    const createPayload =  req.body;
    const parsePayload = createTodo.safeParse(createPayload)
    if(!parsePayload.success){

        res.status(411).json({
            msg: "you sent wrong input"
        })
        return; 
    }
    // put it in mongodb 

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        complete: false
    })
})
app.get('/todos',async (req, res)=>{
    const todos = await todo.find({})
    console.log(todos);
    res.json({todos})
})
app.put('/completed',async(req, res)=>{
    const updatePayload =  req.body;
    const parsePayload = createTodo.safeParse(createPayload)
    if(!parsePayload.success){
        res.status(401).json({
            msg: "you sent a wrong input"
        })
        return
    }
    await todo.update({
        _id: req.body.id
    },{
        completed: true
    })
    res.json({msg: "todo marked as completed"})
})

app.listen(3000,()=>console.log('server is running'))