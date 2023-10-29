const express=require('express')

// const mongoose = require('mongoose')


const app=express()
const cors = require("cors");
app.use(cors());
app.use((req, res, next) => {
    res.header('access-control-allow-origin', '*');
    next();
  });
app.use(express.json())

app.listen(5000,()=>{
    console.log('server listening on port 5000')
})

const globalArr = ['',''];
app.post('/coor',(req,res)=>{
    console.log(req.body);
    globalArr[0]=req.body.x
    globalArr[1] = req.body.y
    res.send('Hello World');
})

app.get('/user',(req,res)=>{
    console.log("hello");
    res.status(200).json({"x":globalArr[0],"y":globalArr[1]});
    // res.send({x:globalArr[0],y:globalArr[1]})
    //  res.send({y:"Sd"});
})