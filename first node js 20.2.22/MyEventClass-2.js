const { EventEmitter } = require('stream')
class MyClassEvent extends EventEmitter {
    constructor(){
        super()
        this.onDoNow()
    }
    onDoNow(){
        this.on("doNow",()=>{
            console.log("izhak lijalem");
        })
    }
    emitDoNow(){
        this.emit("doNow")
    }
}
module.exports = MyClassEvent;