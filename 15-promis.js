const {readFile}= require('fs') // imporint readFile function from fs module
const content = (path)=>{ // creating a new function content which take path as parameter
    return new Promise((resolve,reject)=>{ // creating new promise which take two parameter resolve and reject
        readFile(path,'utf-8',(err,result)=>{
            if(err){ 
                reject(err.message) // if error occured while reading file promise is rejected with error
            }
            else
            resolve(result) // if everything went good while reading , promise is resolved with content of file
        })
    })
}
content('./foder/subfolder/text.txt')
    .then((result)=> console.log(result)) // if promise is resolved this block is executed 
    .catch((error)=> console.log(error))// if promise is rejected this block is executed
