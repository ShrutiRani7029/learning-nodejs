//node me hr file ek module kahi jati hai
///REQUIRE OR COMMON JS MODULE

const lb=require('./lib.js');
const express=require('express')


console.log("hello");

const server = express();
server.listen(8080);


























///file system module
//const fs=require('fs');
/*const txt = fs.readFileSync('demo.txt', 'utf-8');
console.log(txt);*/ //iss module se file read ho skti hai but aisa kbhi nhi krte hai kyuki
//node ek server hai aur server kbhi block nhi hona chahiye especially aisi chizo me jisme use time lgta ho

//isiliye hm asynchronously use krte yha callback me response aati hai
/*fs.readFile('demo.txt','utf-8',(err,txt)=>{
    console.log(txt)

});*/
//yha no. phle hi aajaenge (9,1) kyuki ye block nhi krega node ko

//console.log(lb.sum(4,5),lb.diff(5,4));


///ES MODULE (ECMA SCRIPT)
/*import {sum,diff} from './lib.js';

console.log(sum(4,5),diff(5,4));*/