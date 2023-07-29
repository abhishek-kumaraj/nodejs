// http module
// building simple server using it

const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/home'){
        res.end('this is the home page boy')
    }
    if(req.url === '/about'){
        res.end('this is the about page ')
    }
    res.end('NOPE')
})

server.listen(8000)