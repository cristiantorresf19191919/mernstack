const express = require('express');
const router = express.Router();

// @route       GET api/auth
// @desc        Get logged in user
//@access       Private
router.get('/',async (req,res)=>{
    try {
        res.send('get logged user');
        
        
    } catch (error) {
        console.error(error.msg);
    }
})

// @route       POST api/auth
// @desc        Aurh user & get token
//@access       Public
router.post('/',async (req,res)=>{
    try {
        res.send('lOG IN USER');       
    } catch (error) {
        console.error(error.msg);
    }
})
module.exports = router;