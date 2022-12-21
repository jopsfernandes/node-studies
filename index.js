const fs = require('fs');
const read = require('readline');

fs.readFile('ex.txt',(err,data) => {

    let str = data.toString();
    // let newStr = str.split('/')

    let newStr = str.substring(0,3);
    console.log(newStr)
})