const fs=require("fs");

const quote="hitesh is learning Full stack"
fs.writeFile('./awesome.html',quote, (err)=>{
    console.log(err)
    console.log("Completed writing")
})


const quote2="Live More Worry Less"


// for (let i=1;i<=(process.argv[2]);i++){
//     const q='./backup/text'+i+'.html'
 
//     fs.writeFile(`./backup/text${i}.html`,quote2,(err)=>{
//         console.log(err)
//         console.log("completed writing")
//     })

// }


fs.readFile('cool.txt',"utf-8",(err,data)=>{ 
    if(err){
        console.error(err)
    }
    else{
    console.log(data)
    }
 })

 const quote3="Keep Smiling"

 fs.appendFile('nice.txt',"\n"+quote3,(err)=>{
     console.error(err)
     console.log("done appending")
 })
 

 fs.unlink('./delete.css',(err)=>{
     if(err){
         console.log(err)
     }
     else{
         console.log("delete done")
     }
 })