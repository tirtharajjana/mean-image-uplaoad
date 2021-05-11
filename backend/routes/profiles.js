const express=require("express");

const profilesController=require('../controllers/profiles');

//storage
const router =express.Router();

// router.get('/',)

router.post('/',storage,profilesController.postProfile);

module.exports=router;
