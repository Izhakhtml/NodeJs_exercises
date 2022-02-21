const { EventEmitter } = require('stream')
const fs = require('fs')
class MyEventClass extends EventEmitter {
    constructor(){
        super()
        this.onListener();
    }
    onListener(){
        this.on("listener",(file,data)=>{
          fs.writeFile(`./${file}`,`${data}`,()=>{})
        })
    }
    emitListener(file,data){
        this.emit("listener",file,data)
    }
}
module.exports = MyEventClass;