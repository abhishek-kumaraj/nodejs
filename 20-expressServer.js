const express = require('express')
const path = require('path')

const app = express()

app.use(express.static('./public'))
//sending html file of navbar app
app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
    
})
// if unknown request received

app.all('*',(req,res)=>{
    res.status(404).send('resourse not found')

})

app.listen(5000,()=>{
    console.log('listening at port 5000')
})
// no need for this 
//

 // sending css file for navbar app
// app.get('/styles.css',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./navbar-app/styles.css'))
// })
// // sending logo for navbar app
// app.get('/logo.svg',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./navbar-app/logo.svg'))
// })
// // sending logic file of javascript for the app
// app.get('/browser-app.js',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./navbar-app/browser-app.js'))
// })
