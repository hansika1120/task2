const express = require('express');
const path = require('path');
const app=express();

app.set("view engine",'ejs');
app.set('views',path.resolve("./views"));

app.get("/",async(req,res)=>{
    res.render('home');
})

app.listen(8000,()=>console.log('server started'));