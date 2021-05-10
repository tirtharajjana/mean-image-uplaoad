const express=require("express");

//controller

//storage
const router =express.Router();

// router.get('/',)

router.post('/',storage,profilesController.postProfile);

module.exports=router;
