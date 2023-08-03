// node server to handle request for narbar app

const http = require('http')
const fs = require('fs')
const html = fs.readFileSync('./navbar-app/index.html')
const css = fs.readFileSync('./navbar-app/styles.css')
const js = fs.readFileSync('./navbar-app/browser-app.js')
const logo = fs.readFileSync('./navbar-app/logo.svg')
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.writeHead(201,{'content-type':'text/html'})
        res.write(html)
        res.end()
    }else if(req.url==='/styles.css'){
        res.writeHead(200,{'content-type':'text/css'})
        res.write(css)
        res.end()
    }
    else if(req.url === '/browser-app.js'){
        res.writeHead(200,{'content-type':'text/javascript'})
        res.write(js)
        res.end()

    }
    else if(req.url === '/logo.svg'){
        res.writeHead(200, { 'content-type': 'image/svg+xml' })
        res.write(logo)
        res.end()

    }
    else{
        console.log(req.url)
        res.writeHead(404,{'content-type':'text/plain'})
        res.end('not found')
    }    
})
server.listen(8000)