const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    const fileStream = fs.createReadStream('./folder/bigfile.txt','utf-8')
    // fileStream.on('data',(result)=>{
    //     res.end(result)
    // })
    fileStream.on('open',()=>{
        fileStream.pipe(res)
    })
    fileStream.on('error',(err)=>{
        res.end(err.message)
    })
})
server.listen(5000,()=>{
    console.log('listening at port 5000')
})
 // fs.readFile('index.html','utf-8',(err,data)=>{
    //     if(err){
            
    //         res.end(err.message)
    //     }else{
    //         console.log('user hit the server')
    //         res.end(data)
    //     }
    // })