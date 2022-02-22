const fs = require('fs');
const http = require('http').Server;
const util = require('util');
class EventClass extends http {
    constructor(){
        super();
        this.on("request",this.onData);
        this.listen(7003);
    }
    onData = (reject,response)=>{
        let src = fs.createReadStream("./file-7.json");
        src.pipe(response)
    }
}
module.exports = new EventClass;
