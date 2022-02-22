const fs = require('fs');
const http = require('http').Server;
const util = require('util');
const server2 = util.promisify(fs.readFile);
class EventClass extends http {
    constructor(){
        super();
        this.on("request",this.onData);
        this.listen(9090);
    }
    onData = (reject,response)=>{
     server2("./file-1.json")
     .then((res)=> response.end(res.toString()))
     .catch((rej)=>{throw rej});
    }
}
module.exports = new EventClass;
