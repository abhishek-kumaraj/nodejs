const express = require('express')
const app = express()
const logger = require('./logger')
const autherize = require('./autherize')
const morgan = require('morgan')

// options for middleware - 1.your_own 2.express 3.third_party
// app.use([logger,autherize]) // our own middleware
// app.use(express.static('./public')) // middleware provided by express


app.get('/',(req,res)=>{
    res.send('home page')
})

app.get('/about',morgan('tiny'), (req,res)=>{
    res.send('about')
})

app.get('/api/products',(req,res)=>{
    res.send('products')
})
app.get('/api/items',(req,res)=>{
    res.send('items')
})

app.listen(5000,()=>{
    console.log('listening at port 5000....')
})