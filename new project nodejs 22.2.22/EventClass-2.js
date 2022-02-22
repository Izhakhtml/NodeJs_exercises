const fs = require('fs');
const http = require('http').Server;
const util = require('util');
const server2 = util.promisify(fs.readFile);
class EventClass extends http {
constructor(){
    super();
    this.on("request",this.onData);
    this.listen(8080);
}
onData =(reject,respone)=>{
    server2("./text-2.txt")
    .then((res)=> respone.end(res.toString()))
    .catch((res)=> {throw res})
}
}
module.exports = new EventClass;
