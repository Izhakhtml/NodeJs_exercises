const http = require('http').Server
const fs = require("fs")
const util = require("util")
const full = util.promisify(fs.readFile)
class MyEventClass extends http {
    constructor() {
        super()
        this.on("request", this.getData)
        this.listen(8000)
    }
    getDataByPromise = (request,response)=>{
        full("./text.txt")
            .then((res) => response.end(res.toString()))
            .catch((err) => { throw err })
    }
    getData = (request,response)=>{
    fs.readFile("./text.txt",(err,res)=>{
        if(err) throw err;
        response.end(res.toString())
    })
    }
}

module.exports = new MyEventClass();

