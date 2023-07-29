// fs module Async

const {readFile, writeFile} = require('fs') // importing two functions of fs module

console.log('start of first task')

// this readfile code will execute parallely with rest of the code 
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
        console.log('task is completed')
    })

} ) // after reading the specified file path , executing the callback function
console.log('start of next task')