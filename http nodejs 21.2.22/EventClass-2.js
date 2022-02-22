const eventA = require('events') 
const fs = require('fs');
class EventClass extends eventA{
    constructor(){
        super();
        this.on("listen",this.onData);
    }
    onData = (data)=>{
        fs.writeFile("./text-4.txt",`${data}`,()=>{});
    }
    emitData = (data)=>{
        this.emit("listen",data)
    }
}
module.exports = EventClass;