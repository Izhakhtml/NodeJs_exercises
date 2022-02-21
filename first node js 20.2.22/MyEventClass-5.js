const { EventEmitter } = require('stream')
const fs = require('fs')
class MyEventClass extends EventEmitter {
    constructor(){
        super()
        this.onListener();
    }
    onListener(){
        this.on("listener",(file)=>{
          fs.writeFile(`./${file}`,"I'm listener",()=>{})
        })
    }
    emitListener(file){
        this.emit("listener",file)
    }
}
module.exports = MyEventClass;