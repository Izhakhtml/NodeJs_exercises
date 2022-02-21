const http = require("http").Server
const fs = require('fs');
const util = require('util');
const asyncExecute = util.promisify(fs.readFile);
class MyEventClass extends http{
    constructor(){
        super()
        this.on("request",this.getData);
        this.listen(8080);
    }
    getData = (request,response)=>{
        asyncExecute("./text2.txt")
        .then((res)=> response.end(res.toString()))
        .catch((rej)=> {throw rej})
    }
}
module.exports = new MyEventClass;