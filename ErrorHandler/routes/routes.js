const express = require('express')
const router = express.Router()
const errorHandler = require('../middleware/errorhandler')

// const app = express()


router.get("/error",(req, res, next)=>{
    try{
        console.log("error");
        res.status(400).json({message:"error end point here"})

    }catch(err){
        next(err)
    }
    
} )




module.exports = router