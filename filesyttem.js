const fs=require("fs");
let out =fs.createWriteStream("out.log");
let err =fs.createWriteStream("err.log");

var logger=new console.Console(out,err);
logger.log("logger log...");
logger.error("logger err...");
console.log(process.arch);
//console.log(process.env);
console.log(process.memoryUsage());
console.log(process.pid);