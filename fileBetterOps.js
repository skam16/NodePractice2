const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async () => {
    try{
        const data = await fsPromises.readFile(path.join(__dirname,'files','starter.txt'),'utf8');
        console.log(data);
        await fsPromises.unlink(path.join(__dirname,'files','starter.txt'),data);
        await fsPromises.writeFile(path.join(__dirname,'files','promisesWrite.txt'),data);
        await fsPromises.appendFile(path.join(__dirname,'files','promisesWrite.txt'),'\n\nNice to meet You!!!');
        await fsPromises.rename(path.join(__dirname,'files','promisesWrite.txt'),path.join(__dirname,'files','newPromises.txt'));

        const newData = await fsPromises.readFile(path.join(__dirname,'files','newPromises.txt'),'utf8');
        console.log(newData);
    }catch(err){
        console.log(err);
    }
}

fileOps();