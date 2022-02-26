const servserExpress = require('express');
const express = servserExpress();
const util = require('util');
const fs = require('fs');
const promiseApp = util.promisify(fs.readFile); 
express.listen(3000,()=>{
    console.log("listen to user");
})
express.get("/",(request,response)=>{
    //! by readfile;
    // fs.readFile('./text.txt',(err,res)=>{
    //     response.send(res.toString());
    // })
    //! by try catch async;
    promiseApp('./text.txt')
    .then(res => response.send(`<h1>${res}</h1>`))
    .catch(rej => console.error(rej));
})
express.get("/moshe",(req,res)=>{
    res.send("hello everybody moshe");
})
express.post('/',(req,res)=>{
    res.send('hello everybody')
})