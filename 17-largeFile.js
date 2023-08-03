// to read large file in chunks
const {writeFileSync}= require('fs')
const {createReadStream}  = require('fs')
// for(let i = 0;i< 10000;i++){
//     writeFileSync('./folder/bigfile.txt',`hello, this is ${i}\n`,{flag:'a'})
// }
const stream = createReadStream('./folder/bigfile.txt',{encoding:'utf-8'})
stream.on('data',(result)=>{
    console.log(result)
})
stream.on('error',(err)=>{
    console.log(err.message)
})