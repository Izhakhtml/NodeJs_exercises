const net = require('net').Server;
class SocketClass extends net{
    constructor(){
        super();
        this.on("connection",this.onData);
        this.listen('6969')
    }
    onData = (socket)=>{
     console.log("create connection"); 
     this.socket = socket;
     this.repeater()
    }
    repeater = ()=>{
     let count = 0;
     console.log("sdssd");
      setInterval(() => {
          this.socket.write(`The numberd ${count++} `);
      }, 3000);
    }
}
module.exports = new SocketClass;