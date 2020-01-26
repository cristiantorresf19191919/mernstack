const express = require('express');
const router = express.Router();
// @route       GET api/contacts
// @desc        Get all users contacts
// @access      Private
router.get('/',async (req,res)=>{
    try {
        res.send('get all contacts');        
    } catch (error) {
        console.error(error.msg);
    }
})

// @route       POST api/contacts
// @desc        Add a new contact
//@access       Private
router.post('/',async (req,res)=>{
    try {
        res.send('Add a contact');       
        
    } catch (error) {
        console.error(error.msg);
    }
})
// @route       PUT api/contacts/:id
// @desc        Update a contact
//@access       Private
router.put('/:id',async (req,res)=>{
    try {
        res.send('UPDATE A CONTACT');                
    } catch (error) {
        console.error(error.msg);
    }
})
// @route       DELETE api/contacts
// @desc        Delete a user's contact
//@access       Public
router.delete('/:id',async (req,res)=>{
    try {
        res.send('DELETE A CONTACTS');
    } catch (error) {
        console.error(error.msg);
    }
})
module.exports = router;