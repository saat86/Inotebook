const express=require('express')
const router =express.Router();

router.get('/',(req,res)=>{
    obj={
        a:'abc',
    }
    res.json(obj)
})
 module.exports =router