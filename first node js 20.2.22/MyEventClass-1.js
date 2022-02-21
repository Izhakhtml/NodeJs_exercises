const { EventEmitter } = require('stream')
class MyClassEvent extends EventEmitter {
    constructor() {
    super()
    // this.onPrint()
    }
    onPrint() {
        this.on("printName", (data) => {
            console.log("HELLO THERE:" + data);
        })
    }
    embitPrint(data) {
        this.emit("printName", data)
    }
}
module.exports = MyClassEvent;
