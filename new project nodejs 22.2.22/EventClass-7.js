const fs = require('fs');
const http = require('http').Server;
const util = require('util');
// const server2 = util.promisify(fs.createReadStream);
class EventClass extends http {
    constructor(){
        super();
        this.on("request",this.onData);
        this.listen(4002);
    }
    onData = (reject,response)=>{
        let src =  fs.createReadStream("./file-5.json");
        src.pipe(response);
    } 
}
module.exports = new EventClass;