const eventA = require('events') 
const fs = require('fs');
class EventClass extends eventA{
    constructor(){
        super();
        this.on("listen",this.onData);
    }
    onData = (array)=>{
        fs.writeFile("./file-3.json",`${JSON.stringify(array)}`,()=>{});
    }
    emitData = (array)=>{
        this.emit("listen",array)
    }
}
module.exports = EventClass;
