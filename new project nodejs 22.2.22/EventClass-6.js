const fs = require('fs');
const http = require('http').Server;
const util = require('util');
// const server2 = util.promisify(fs.createReadStream);
class EventClass extends http {
    constructor(){
        super();
        this.on("request",this.onData);
        this.listen(3002);
    }
    onData = (reject,response)=>{
        // server2("./file-4.json")
        // .then((res)=> res.pipe(response))
        // .catch((rej)=> {throw rej});
        let src = fs.createReadStream("./file-4.json")
        src.pipe(response);
    }
}
module.exports = new EventClass;