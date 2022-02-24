const netServer = require('http').createServer(()=>{});
const socket_IO = require('socket.io')(netServer); 
class MyEvent extends netServer{
constructor(){
    super();
    this.listen('8080')
    this.on('request');
}
}
module.exports = new MyEvent;