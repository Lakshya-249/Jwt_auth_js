const jwt = require("jsonwebtoken");
const secretkey = "lakshya@123";

const setuser = (user)=>{
    const payload = {
        _id: user._id,
        email: user.email
    }
    return jwt.sign(payload,secretkey);
}

const getuser = (token)=>{
    if(!token) return null;
    try{
        return jwt.verify(token,secretkey);
    }catch(err){
        return null;
    }
}

module.exports = {setuser,getuser};