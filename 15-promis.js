const {readFile,writeFile}= require('fs').promises // imporint readFile function from fs module
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)
// const content = (path)=>{ // creating a new function content which take path as parameter
//     return new Promise((resolve,reject)=>{ // creating new promise which take two parameter resolve and reject
//         readFile(path,'utf-8',(err,result)=>{
//             if(err){ 
//                 reject(err.message) // if error occured while reading file promise is rejected with error
//             }
//             else
//             resolve(result) // if everything went good while reading , promise is resolved with content of file
//         })
//     })
// }
// content('./foder/subfolder/text.txt')
//     .then((result)=> console.log(result)) // if promise is resolved this block is executed 
//     .catch((error)=> console.log(error))// if promise is rejected this block is executed

const start = async()=>{
    
    try {
        // const firstContent = await content('./folder/subfolder/text.txt')
        // const secondContent = await content('./folder/subfolder/text2.txt')
        // const firstContent = await readFilePromise('./folder/subfolder/text.txt','utf8')
        // const secondContent = await readFilePromise('./folder/subfolder/text2.txt','utf8')
        const firstContent = await readFile('./folder/subfolder/text.txt')
        const secondContent = await readFile('./folder/subfolder/text2.txt')
        await writeFile('./folder/writeFunPromise.txt',`first:${firstContent}, second:${secondContent}`)
    } catch (error) {
        console.log(error)
    }
}


start()