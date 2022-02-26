const App = require('express')();
//! exe 1-2-3-4-5
App.listen(3000, () => {
    console.log("someone connection");
})
App.get('/', (req, res) => {
    res.send("wellcome sir");
})
//! exe 6
App.get('/test', (req, res) => {
    res.send('success');
})
//! exe 7
App.get('/names', (req, res) => {
    let names = ["aa", "bb", "cc", "dd", "ee"];
    res.send(names);
})
//! exe 8
App.get('/numbers', (req, res) => {
    let counter = 0
    let arr = []
    while (counter < 10) {
        arr.push(Math.floor(Math.random() * 10));
        counter++;
    }
    res.send(arr);
})
//! exe 9
App.get('/rnmumbers', (req, res) => {
    let counter = 0
    let arr = []
    while (counter < 10) {
        arr.push(Math.floor(Math.random() * 100));
        counter++;
    }
    arr.sort((a, b) => { return a - b });
    res.send(`${arr[arr.length - 1]}`);
})
//! exe 10 
App.get('/numbers/:id', (req, res) => {
    let array = []
    let counter = 0;
    let index = req.params.id
    while (counter < 10) {
        array.push(Math.floor(Math.random() * 100))
        counter++;
    }

    res.send(`${array[index]}`)
})
//! exe 11
App.get('/isNumber/:num', (req, res) => {
    let array = []
    let counter = 0;
    let index = req.params.num
    while (counter < 5) {
        array.push(Math.floor(Math.random()*10))
        counter++;
    }
    for (let i = 0; i < array.length; i++) {
        if(array[i]==index){
         res.send("is exist");
        }else{
         res.send("not exist");
        }
    }
});
//! exe 12

