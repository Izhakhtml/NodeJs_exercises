const fs = require('fs');
const toki = require("./TokiClass");
const user = require("./UserClass");
//! exe 13-14
// let text = "Kiryat Ekron was founded in 1948, as Kfar Ekron, on the site of the Palestinian village of Aqir, and was named after the biblical Ekron, a major Philistine city that is believed to have once existed at nearby Tel Mikne.[2] After the war, new immigrants from Yemen and Bulgaria settled in the remaining houses. In November 1948, two ma'abarot were established on the village's lands; the Aqir ma'abara, and the Givat Brenner ma'abara. In 1953, the Aqir ma'abara was officially made part of Kfar Ekron, followed by the Givat Brenner ma'abara in 1955. From 1954 to 1963, Kfar Ekron belonged to the Givat Brenner regional council. In 1963, the name of the town was changed to Kiryat Ekron, and it became an independent local municipality.[3]"
// fs.writeFile("./text-1.txt",`${text}`,()=>{});
// require('./EventClass-1');
//! exe 15
// let text = "Kiryat Ekron was founded in 1948, as Kfar Ekron, on the site of the Palestinian village of Aqir, and was named after the biblical Ekron, a major Philistine city that is believed to have once existed at nearby Tel Mikne.[2] After the war, new immigrants from Yemen and Bulgaria settled in the remaining houses. In November 1948, two ma'abarot were established on the village's lands; the Aqir ma'abara, and the Givat Brenner ma'abara. In 1953, the Aqir ma'abara was officially made part of Kfar Ekron, followed by the Givat Brenner ma'abara in 1955. From 1954 to 1963, Kfar Ekron belonged to the Givat Brenner regional council. In 1963, the name of the town was changed to Kiryat Ekron, and it became an independent local municipality.[3]"
// fs.writeFile("./text-2.txt",`${text}`,()=>{});
// require('./EventClass-2');
//! exe 16
// let arrayMovies = ["mask","the child","the sky","the door","the world"];
// fs.writeFile("./file-1.json",`${JSON.stringify(arrayMovies)}`,()=>{});
// require('./EventClass-3');
//! exe 17
// const instance = new toki("toki","female","israel","black")
// fs.writeFile("./file-2.json",`${JSON.stringify(instance)}`,()=>{});
// require('./EventClass-4');
//! exe 18
const TokiArray = 
[
  new toki("toki1","female","israel","black"),
  new toki("toki2","male","brazil","white"),
  new toki("toki3","female","haifa","green"),
  new toki("toki4","male","dimona","gray"),
  new toki("toki5","female","nativot","black"),
]
// fs.writeFile("./file-3.json",`${JSON.stringify(TokiArray)}`,()=>{});
// require('./EventClass-5');
//! exe 19-20
// const UsrInstance = new user("izhak","lijalem","email.com",25,true);
// fs.writeFile("./file-4.json",`${JSON.stringify(UsrInstance)}`,()=>{});
// require('./EventClass-6');
//! exe 21
const UserArray = 
[
    new user("user1","users","email.com",25,false),
    new user("user2","users","email.com",22,true),
    new user("user3","users","email.com",21,false),
    new user("user4","users","email.com",26,true),
    new user("user5","users","email.com",24,false),
    new user("user6","users","email.com",22,true),
]
// fs.writeFile("./file-5.json",`${JSON.stringify(UserArray)}`,()=>{});
// require('./EventClass-7');
//! exe 22
const ManagerObj = {fName:"izhak",lName:"lijalem",email:"izhak@com",salary:14000,employees:["aaa","bbb","ccc","ddd"]}
// fs.writeFile("./file-6.json",`${JSON.stringify(ManagerObj)}`,()=>{});
// require('./EventClass-8');
//! exe 23
const ManagerArray = 
[
    {fName:"manager1",lName:"lijalem",email:"manager@com",salary:14000,employees:["aaa","bbb","ccc","ddd"]},
    {fName:"manager2",lName:"lijalem",email:"manager@com",salary:12000,employees:["sss","asss","xxx","zzz"]},
    {fName:"manager3",lName:"lijalem",email:"manager@com",salary:11000,employees:["ccc","ccc","ccc","cccc"]},
    {fName:"manager4",lName:"lijalem",email:"manager@com",salary:10000,employees:["bbb","ccc","qqq","ddd"]},
    {fName:"manager5",lName:"lijalem",email:"manager@com",salary:19000,employees:["zzz","xxx","sss","wwww"]},
]
// fs.writeFile("./file-7.json",`${JSON.stringify(ManagerArray)}`,()=>{});
require('./EventClass-9');