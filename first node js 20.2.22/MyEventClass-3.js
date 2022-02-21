const { EventEmitter } = require('stream')
class MyEventClass extends EventEmitter {
    constructor() {
        super()
        this.onPrintNames();
    }
    onPrintNames() {
        this.on("PrintNames", (num) => {
            for (let i = 0; i < num; i++) {
                console.log("HELLO THERE");
            }
        })
    }
    emitPrintNames(num) {
         this.emit("PrintNames",num)
    }
}
module.exports = MyEventClass;