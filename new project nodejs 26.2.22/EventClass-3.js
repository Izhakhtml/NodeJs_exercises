const http = require('http').Server;
const fs = require('fs');
class EvenrClass extends http{
    constructor(){
        super();
        this.on('request',this.onDate);
        this.listen(3000);
    }
    onDate = (req,res)=>{
      let src = fs.createReadStream('./text.txt');
      src.pipe(res)
    }
}
module.exports = new EvenrClass;