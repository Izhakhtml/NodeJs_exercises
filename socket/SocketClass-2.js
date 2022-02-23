const netServer = require('net').Server;
class SocketServer extends netServer {
 constructor() {
 super();
 this.listen('6969');
 this.on('connection', this.connectionHandler);
 }
 connectionHandler(socket) {
 console.log(`Someone connected! ${socket.remoteAddress}`);
 this.socket = socket;
 this.dataHandler()
 }
 dataHandler() {
 setInterval(()=>{
    this.socket.write(`Welcome to my server`);
 },1000)
 }
}
module.exports = new SocketServer();
