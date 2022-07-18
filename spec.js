const os=require("os") //import os package

console.log("Free Memory",os.freemem()/1024/1024/1024) //FreeRam
console.log("Total Memory",os.totalmem()/1024/1024/1024) //totalRam
console.log("Version",os.version());
console.log("processor",os.cpus()) 
