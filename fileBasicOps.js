const fs = require('fs');

const path = require('path');

// fs.readFile('./files/starter.txt','utf8',(err,data)=>{
//     if(err) throw err;
//     // console.log(data.toString());
//     console.log(data);
// })

// Much better way to handle paths
fs.readFile(path.join(__dirname, 'files', 'starter.txt'),'utf8',(err,data)=>{
    if(err) throw err;
    // console.log(data.toString());
    console.log(data);
})

// Node is async so this will run before readFile is finished
console.log('Hello.....');


// Write to a file
fs.writeFile(path.join(__dirname, 'files', 'reply.txt'),'Nice to meet you!',(err)=>{
    if(err) throw err;
    // console.log(data.toString());
    console.log("Write Complete!");
})

// append to a file will or create a file if it doesn't exist
fs.appendFile(path.join(__dirname, 'files', 'test.txt'),'testing text',(err)=>{
    if(err) throw err;
    // console.log(data.toString());
    console.log("Append Complete!");

        fs.rename(path.join(__dirname, 'files','reply.txt'),path.join(__dirname, 'files','newReply.txt'),(err)=>{
            if(err) throw err;
            console.log("Rename Complete!");
        })
    
       
});




//exit on uncaught exception
process.on('uncaughtException', err =>{
    console.log(`There was an uncaught error:${err}`);
    process.exit(1);
})