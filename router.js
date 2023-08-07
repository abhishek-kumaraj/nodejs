const express = require('express')
const app = express()
const {people} = require('./json')

const apipeople = require('./routes/people')
const login = require('./routes/login')

app.use(express.static('./methods-public'))
// middleware to parse url encoded data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/people',apipeople)

app.use('/login',login)

app.listen(5000,()=>{
    console.log('listening at port 5000')
})