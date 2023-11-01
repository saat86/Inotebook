const express=require('express')
const User =require('../models/User')
const { query, validationResult } = require('express-validator');
const router =express.Router();

router.post('/',
[
query('name','Enter a valid name').isLength({min:5}),
query('email','Enter a valid email').isEmail(),
query('password','The minimum lenght of password should be 5 charecters').isLength({min:5}),

],async (req,res)=>{
   
    // const user=User(req.body)
    // user.save()
    // res.send(req.body)
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.send({ errors: result.array() });
    }
    
    let User= User.findOne({email:req.body.email})
    if(User){
        res.status(400).json({error:"user with this email already exists"})
    }
  
      User = await User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.eamil,
      }).then(User => res.json(User)).catch(err => console.log(err));
})
 module.exports =router