const fs = require('fs')
const MyEven = require('./MyEventClass-1')
const MyEven2 = require('./MyEventClass-2')
const MyEven3 = require('./MyEventClass-3')
const MyEven4 = require('./MyEventClass-4')
const MyEven5 = require('./MyEventClass-5')
const MyEven6 = require('./MyEventClass-6')
const MyEven7 = require('./MyEventClass-7')
const MyEven8 = require('./MyEventClass-8')
const First =()=>{
let numbers = []
for (let index = 0; index < 15; index++) {
    numbers.push(index)
} 
fs.writeFile('./myFile',`${numbers}`,()=>{}) 
fs.readFile('./myFile',((err,response)=>{
    if(err) throw err
    console.log(response.toString());
}))
}
// First()
const ArrayString =()=>{
const Arr = ["iz","jd","op","re","rw"]
for (let i = 0; i < Arr.length; i++) {
    console.log(Arr[i]);
}
}
// ArrayString()
const RandomArray = ()=>{
let Numbers = []
let OnlyEven = []
for (let i = 0; i < 16; i++) {
let random = Math.floor(Math.random()*10)
Numbers.push(random)    
if (Numbers[i]%2==0) {
    OnlyEven.push(Numbers[i])
    console.log(OnlyEven[i]);
}else{
    OnlyEven.push(0)
}}    
}
// RandomArray()
const GetString =()=>{
let arrString = ["izhak","ahron","moti","alon"]
fs.writeFile('./namesFile',arrString.toString().toUpperCase(),()=>{})
fs.readFile('./namesFile',((err,resolve)=>{
   if (err) throw err;
    let stringArr = resolve.toString().split(',');
    stringArr.forEach(element => {
        if(element[0].toUpperCase()=='A')console.log(element)
    });
}))
}
// GetString();
const GetNumbers =()=>{
let numbers = [];
let numbersRan = [];
for (let i = 0; i < 12; i++) {
  numbers.push(Math.floor(Math.random()*100))
  if(numbers[i]%3==0)numbersRan.push(numbers[i]);
}
fs.writeFile('./numbersFile',numbersRan.toString(),()=>{})
fs.readFile('./numbersFile',((err,resolve)=>{
    if(err)throw err;
    let upThree = resolve.toString().split(',')
    console.log(upThree);
    upThree.forEach(element => {
        if(element > 50)console.log(element)
    });
}))
}
// GetNumbers()
//!
// const Event = new MyEven();
// Event.embitPrint("jacob")
//!
// const Event = new MyEven2();
// Event.emitDoNow()
// Event.emitDoNow()
// Event.emitDoNow()
//!
// const Event = new MyEven3();
// Event.emitPrintNames(8);
//!
// const Event = new MyEven4();
// Event.emitListener();
//!
// const Event = new MyEven5();
// Event.emitListener("listener");
//!
// const Event = new MyEven6();
// Event.emitListener("listen","hello world my name is Izhak");
//!
// let arrString = ["izhak","ahron","moti","alon"]
// const Event = new MyEven7();
// Event.emitListener(arrString);
//!
let nums = [1,11,3,7,9,14,12,89,67,45,22,33,44]
const Event = new MyEven8();
Event.emitListener(nums);