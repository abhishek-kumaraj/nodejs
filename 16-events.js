const EventEmmiter = require('events') //importing EventEmmitter class form events module
const http = require('http') // importing http module 
const server = http.createServer() //http server instance is created

// to create custom events
// const customEvents = new EventEmmiter()

// customEvents.on('respond',()=>{
//     console.log('respond events occured')
// })

// customEvents.emit('respond')
// console.log('hello')
server.on('request',(req,res)=>{
    res.end('hello nodejs..')
})

server.listen(5000)