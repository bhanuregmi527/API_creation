const errorhandlerMiddleware= async (err,req,res,next)=>{
    console.log(err)
    return res.status(500).json({msg:'something got wrong,Please try again'})
}
module.exports=errorhandlerMiddleware