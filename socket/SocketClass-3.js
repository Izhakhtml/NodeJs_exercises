const http = require('net').Server;
class MyEvent extends http{
  constructor(){
      super();
      this.listen('6969');
      this.on('connection',this.socketData);
  }
  socketData = (socket)=>{
      console.log("someone connection");
      this.socket = socket;
      this.reapeter();
  }
  reapeter = ()=>{   
      setInterval(() => {
          const count = new Date();
          this.socket.write(`${count.getHours()}:${count.getMinutes()}:${count.getSeconds()}`)
      }, 1000);
  }
}
module.exports = new MyEvent;