const os = require("os");
const path = require("path");
const fs = require("fs");
const http = require("http");

// Os module
console.log(os.userInfo());
console.log(os.uptime()/100);
console.log(os.freemem());
console.log(os.release());


// Path module
const filePath = path.join('/content' , 'subfolder' , 'test.txt');
console.log(filePath)
const base = path.basename(filePath)
console.log(base)
const abs = path.resolve(__dirname , 'content' , 'subfolder' , 'test.txt');
console.log(abs)

// File module
// const a = fs.readFileSync('./app.js' , 'utf-8');
// //console.log(a)
// const b = fs.readFile('./app.js' ,'utf-8', (err, result)=>{
//   //console.log(result);
// })

// Http module
const server = http.createServer((req , res) => {
  console.log(req.url);
  res.write("hi");
  res.end()
})

server.listen(5000);
