const autherize = (req,res,next)=>{
    console.log('autherising')
    next()
}

module.exports= autherize