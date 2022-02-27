const http = require('http').Server;
const fs = require('fs');
class EventClass extends http{
constructor(){
    super();
    this.on('connection',this.OnData);
    this.on('request',this.responseUser)
    this.listen(3000);
}
OnData = ()=>{
console.log("someone connection");

}
responseUser = (req,resp)=>{
   fs.readFile('./text.txt',(err,res)=>{
    resp.end(res.toString());
   })
}
}
module.exports = new EventClass;