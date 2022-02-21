const { EventEmitter } = require('stream')
const fs = require('fs')
class MyEventClass extends EventEmitter {
    constructor(){
        super()
        this.onListener();
    }
    onListener(){
        this.on("listener",(data)=>{
          fs.writeFile(`./listener`,`${data}`,()=>{})
        })
    }
    emitListener(data){
        this.emit("listener",data)
    }
}
module.exports = MyEventClass;