const { EventEmitter } = require('stream')
const fs = require('fs')
class MyEventClass extends EventEmitter {
    constructor(){
        super()
        this.onListener();
    }
    onListener(){
        let arr = [];
        this.on("listener",(array)=>{
         for (let i = 0; i < array.length; i++) {
           if (array[i]<18) {
             arr.push(array[i])
           }
         }
         fs.writeFile(`./listener`,`${arr}`,()=>{})  
        })
    }
    emitListener(array){
        this.emit("listener",array)
    }
}
module.exports = MyEventClass;