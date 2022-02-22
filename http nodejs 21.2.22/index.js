const fs = require('fs');
const { json } = require('stream/consumers');
//! exe 2
const EvenNumber = (array) => {
    let nums = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            nums.push(array[i]);
        }
    }
    console.log(nums);
}
// EvenNumber([0,1,2,3,4,5,6,7,8,9])
//! exe 3
const ArrayRandom = () => {
    let counter = 0;
    let nums = [];
    let arr = [];
    while (counter < 16) {
        arr.push(Math.floor(Math.random() * 10));
        if (arr[counter] % 2 == 0) {
            nums.push(arr[counter]);
        }
        counter++;
    }
    console.log(nums);
}
// ArrayRandom()
//! exe 4 challenge
// const child = {name:"izhak",agr:25,ifIsGarden:true}
// fs.writeFile("./file.json",`${JSON.stringify({child})}`,()=>{})

//! exe 5
// const StudentArray = ["izhak","aliav","malca","kfir","matan"]
// fs.writeFile("./text.txt",`${StudentArray}`,()=>{})
// fs.readFile("./text.txt",(err,res)=>{
//     if (err) throw err;
//     const array = res.toString().split(",")
//     array.forEach(item => {
//          if(item[0].toLowerCase() == "k"){
//             console.log(item);
//         }   
//     });
// })
//! exe 6 challenge
// const ChildArr = 
// [
//     {name:"izhak",agr:7,ifIsGarden:false},
//     {name:"aliav",agr:6,ifIsGarden:true},
//     {name:"malca",agr:4,ifIsGarden:true},
//     {name:"kfir",agr:8,ifIsGarden:false},
//     {name:"matan",agr:2,ifIsGarden:true}
// ]
// fs.writeFile("./file.json",`${JSON.stringify(ChildArr)}`,()=>{})
// fs.readFile("./file.json",(err,res)=>{
//     if(err) throw err;
//     const result = JSON.parse(res.toString().split());
//     console.log(result.length);
//     result.forEach(element => {
//         if(element.ifIsGarden == true){
//             console.log(element);
//         }
//     });
// })
//! exe 7
const ArrayRandomNums = () => {
    let nums = [];
    let arr = [];
    let counter = 0;
    while (counter < 101) {
        nums.push(Math.floor(Math.random() * 100));
        if (nums[counter] % 7 == 0) {
            arr.push(nums[counter]);
        }
        counter++;
    }
    fs.writeFile("./text-2.txt", `${arr}`, () => { })
    fs.readFile("./text-2.txt", (err, res) => {
        if (err) throw err;
        let result = res.toString().split(",");
        result.forEach(element => {
            if (element > 50) {
                console.log(element);
            }
        });
    })
}
// ArrayRandomNums();
//! exe 8 challenge
const FilterNumByJson = () => {
    let nums = [];
    let arr = [];
    let counter = 0;
    while (counter < 101) {
        nums.push(Math.floor(Math.random() * 100));
        if (nums[counter] % 7 == 0) {
            arr.push(nums[counter]);
        }
        counter++;
    }
    fs.writeFile("./file-2.json", `[${arr}]`, () => { })
    fs.readFile("./file-2.json", (err, res) => {
        if (err) throw err;
        const result = res.toString().split(",")
        result.forEach(element => {
            if (element > 50) {
                console.log(element);
            }
        });
    })
}
// FilterNumByJson();
//! exe 9
// const event1 = require("./EventClass-1");
// const instance = new event1();
// instance.emitData()
//! exe 10
// const event1 = require("./EventClass-2");
// const instance = new event1();
// instance.emitData("Hey there;");
//! exe 11
// const event1 = require("./EventClass-3");
// const instance = new event1();
// instance.emitData(["izhak","marcos","orial","itay","moti"]);
//! exe 12
