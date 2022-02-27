const fs = require('fs');
const events = require('events');
class EventClass extends events{
    constructor(){
        super();
        this.on("somthing",this.onData);
    }
    onData =()=>{
        fs.writeFile("text-4.text","I'm liatener",()=>{});
    }
    emitData =()=>{
        this.emit("somthing");
    }
}
module.exports = EventClass;