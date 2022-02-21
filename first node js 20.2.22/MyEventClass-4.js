const { EventEmitter } = require('stream')
class MyEventClass extends EventEmitter {
    constructor() {
        super()
        this.onListener();
    }
    onListener() {
        this.on("listener", () => {
            console.log("I'm listener");
        })
    }
    emitListener() {
        this.emit("listener")
    }
}
module.exports = MyEventClass;