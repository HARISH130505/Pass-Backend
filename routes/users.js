const express = require('express');
const User = require('../model/schema')

const router = express()

router.get('/',async(req,res)=>{
    try{
        const user = await User.find()
        res.json(user)
    }
    catch(err){
        res.send("Error:",err)
    }
})


router.post('/',async(req,res)=>{
     const user = new User({
        fn:req.body.fn,
        ln:req.body.ln,
        passno:req.body.passno,
        dob:req.body.dob,
        pob:req.body.pob
     })
     try{
        const u1 = await user.save()
        res.send(u1)
     }
     catch(err){
        console.log(err)
     }
})

module.exports = router