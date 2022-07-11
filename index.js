/* CHECKING FANDAMENTALS , WE CAN'T ASSIGN TWO VALUES TO CONS'T
var a=20;
let b=30;
const c=50;
b=60;
console.log(a+b+c) */

/* IF CONDITION EXAMPLE
var x=20;
if(x===20){
    console.log('matched')
} */

/* FOR LOOP
for(var i=0;i<10;i++){
    console.log(i)
}*/

/*
const arr=[1,2,3,45,3,6,7]
console.log(arr) */

/* IMPORT EXPORT IN NODE JS
const app=require('./app')
console.log(app)
console.log(app.x)
console.log(app.y) */ 

/* THIS IS FOR CREATING FILE IN NODE
const fs=require("fs").writeFileSync;
fs('abc.txt','this is my first file') */

/* This is one way to runserver passing function as a paraeter!
const http=require('http')
http.createServer((req,res)=>{
    res.write('hello my name is balu, god help me to Achieve my Goals');
    res.end();
}).listen(8888);
console.log('server is running on port 8888') */

/* PASSING FUNCTION AS A PARAMETER!!
const http=require('http')
function dataControl(req,res){
    res.write('<h1><i>My name is Balu!</i></h1>')
    res.end();
}
http.createServer(dataControl).listen(8888);
console.log('server is running on portal 8888!') */

/*
const fs=require('fs');
fs.writeFileSync('balu.txt','my name is u know right!?')
*/

/* TESTING COLOR PACKAGE!!(COLOR MODULE ALREADY INSTALLED!)
const colors=require('colors')
console.log('my name is balu!'.red)
*/

/* THIS IS CREATING SERVER AND WRITEING SIMPLE BASIC API INSIDE IT!
console.log('balu')
const data=require('./data')
const http=require('http')
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application/json'});
    res.write(JSON.stringify(data));
    res.end()
}).listen(8888);
console.log('server is running on port 8888');
console.log('its working totally fine!')
*/

/* THIS EXAMPLE IS TO GET INPUT FROM CMD AND PROCESS IT
const fs=require('fs')
const input=process.argv;
if (input[2]=='add'){
  fs.writeFileSync(input[3],input[4])
}
else if(input[2]=='remove'){
    fs.unlinkSync(input[3])
}
else{
    console.log('invalid output')
}
*/

/* GETTING CURRENT PATH 
const fs=require('fs')
const path=require('path')
const dirpath=path.join(__dirname)
console.log(dirpath)
*/

const fs=require('fs')
const path=require('path')
const dirpath=path.join(__dirname,'files')
console.log(dirpath)