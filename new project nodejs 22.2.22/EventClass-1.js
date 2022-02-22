const fs = require('fs');
const http = require('http').Server;
const util = require('util');
const server2 = util.promisify(fs.readFile);
class EventClass extends http{
constructor(){
    super();
    this.on("request",this.onData)
    this.listen(8000);
}
onData = (reject,result)=>{
    //! by async
    server2("./text-1.txt")
    .then((res)=> result.end(res.toString()))
    .catch((err)=> console.error(err));
    //! sync
// (reject,result)=>{
//     fs.readFile("./text-1.txt",(err,res)=>{
//         if(err) throw err;
//         result.end(res.toString());
//     })
}
}
module.exports = new EventClass;