const express = require('express') // importing express library
const app = express() // creating instance of express application

const {products} = require('./json.js') // importing products variable from json.js module

app.get('/',(req,res)=>{ 
    res.send('<h2>Home page</h2><a href ="/api/products">Products</a>')
})
app.get('/api/products',(req,res)=>{
    const newProducts = products.map((product)=>{
        const {id,name,price,desc} = product
        return {id,name,price,desc}
    })
    res.json(newProducts)
})

app.get('/api/products/:productID',(req,res)=>{
    console.log(req.params) 
    const {productID} = req.params
    const singleProduct = products.find((product)=> product.id === Number(productID))
    
    res.json(singleProduct)
})

app.listen(5000,()=>{
    console.log('server listening at port 5000...')

})