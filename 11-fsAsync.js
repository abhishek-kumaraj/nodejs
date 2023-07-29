// fs module Async

const {readFile, writeFile} = require('fs') // importing two functions of fs module

readFile('./folder/subfolder/text.txt','utf8',(err, result)=>{
    if(err) // if error occured while reading the file
    {
        console.log(err) // printing the error 
        return
    }
    const content = result
    writeFile('./folder/writeAsync.txt',`helloo async ${content}`,(err, result)=>{
        if(err){
            console.log(err)
            return
        }
        return result
    })

} ) // after reading the specified file path , executing the callback function