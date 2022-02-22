// const http = require('http').Server;
const eventA = require('events') 
const fs = require('fs');
class EvenClass extends eventA{
    constructor(){
        super();
        this.on("listen",this.onData)

    }
    onData = ()=>{
      fs.writeFile("./text-3.txt","I'm listener",()=>{})
    }
    emitData =()=>{
      this.emit("listen")
    }
}
module.exports = EvenClass