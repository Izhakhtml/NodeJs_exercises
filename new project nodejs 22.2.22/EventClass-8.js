const fs = require('fs');
const http = require('http').Server;
const util = require('util');
class EventClass extends http {
    constructor(){
        super();
        this.on("request",this.onData);
        this.listen(7000);
    }
    onData = (reject,response)=>{
        let src = fs.createReadStream("./file-6.json");
        src.pipe(response);
    }
}
module.exports = new EventClass;