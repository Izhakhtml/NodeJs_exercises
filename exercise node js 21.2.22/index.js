// require("./MyEventClass")
// require("./MyEventClass-2")
require("./MyEventClass-3")
const fs = require('fs')
let arrayNames = ["aaa","bbb","ccc","dddd"]
fs.writeFile("./file.json",`{"arr":"[${arrayNames}]"}`,()=>{})
