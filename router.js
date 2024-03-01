const express = require("express");
const {signuser,loginuser,logoutuser} = require("./userware");

const router = express.Router();

router.post("/signup",signuser);
router.post("/login",loginuser);
router.post("/logout",logoutuser);
// router.get("/",userdata);


module.exports = router;