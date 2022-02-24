const Http = require('net').Server
class MYevent extends Http{
    constructor(){
        super()
        this.listen('6969')
        this.on('connection',this.socketObj)
    }
    socketObj = (socket)=>{
        console.log("someone connection");
        this.socket = socket;
        this.reapter();
    }
    reapter(){
        let counter = 0;
        setInterval(() => {
            this.socket.write(`${counter *= 2}`)
        }, 4000);
    }
}
module.exports = new MYevent;