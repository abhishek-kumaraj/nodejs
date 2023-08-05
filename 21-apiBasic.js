const express = require('express') // importing express library
const app = express() // creating instance of express application

const {products} = require('./json.js') // importing products variable from json.js module

app.get('/',(req,res)=>{ 
    res.send('<h2>Home page</h2><a href ="/api/products">Products</a>')
})
// get method for /api/products route
app.get('/api/products',(req,res)=>{
    const newProducts = products.map((product)=>{
        const {id,name,price,desc} = product
        return {id,name,price,desc}
    })
    res.json(newProducts)
})
// get method for route params to get specific result
app.get('/api/products/:productID',(req,res)=>{
    console.log(req.params) 
    const {productID} = req.params
    const singleProduct = products.find((product)=> product.id === Number(productID))
    
    res.json(singleProduct)
})
// setting up query string to provide personalised result
app.get('/api/v1/query', (req,res)=>{
    console.log(req.query)
    let sortedArray = [...products]
    const {start,limit}= req.query
    if(start){
        sortedArray = sortedArray.filter((product)=>{
            return product.name.startsWith(start)
        })
    }
    if(limit){
        sortedArray = sortedArray.slice(0,Number(limit))
    }
    if(sortedArray.length < 1){
        return res.status(200).json({sucess:true,data:[]})
    }
    res.json(sortedArray)

})

app.listen(5000,()=>{
    console.log('server listening at port 5000...')

})