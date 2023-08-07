const express = require('express')
const router = express.Router()


router.post('/',(req,res)=>{
    const {name} = req.body
    console.log(name)
    res.send('post')
})

module.exports = router