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
     let arrayCountry = ["rehovot","brazil","isearl","usa","argantina","polin","iron","azza"]
     let counter = 0
     let id = setInterval(() => {
      this.socket.write(`${arrayCountry[counter]}`)
      counter++;
      if (counter >= arrayCountry.length) {
          clearInterval(id)
      }
     }, 3000);

 }
}
module.exports = new MyEvent;