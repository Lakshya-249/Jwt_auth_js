
const User = require("./database");
const {setuser,getuser} = require("./auth");

const signuser = async (req,res)=>{
    const {name,email,password} = req.body;
    if(!name || !email || !password){
        return res.status(400).json({success: false,message: "All fields are required..."})
    }
    await User.create({
        name: name,
        email: email,
        password: password
    });
    return res.status(200).json({success: true,message: "User Data entered Successfully..."});
}

const loginuser = async (req,res)=>{
    const {email, password} = req.body;
    const user = await User.findOne({email,password});
    // console.log(user);
    if(!user){
        return res.status(404).json({success: false,message: "User not found..."});
    }
    
    const token = setuser(user);
    res.cookie("uid",token);
    return res.status(200).json({success: true,message: "User Logined..."});
}

const logoutuser = async (req,res)=>{
    res.clearCookie("uid");
    return res.status(200).json({success: true,message: "User Logged Out"});
}

const userdata = async (req,res)=>{
    const user = await User.find({});
    return res.status(200).json({success:true, Data: user});
}

const userdata2 = async (req,res)=>{
    if(!req.user) return res.json({success: false,message: "No user found..."});
    const user  = await User.findOne({_id: req.user._id});
    return res.json({success: true,Data: user});
}

module.exports = {signuser, loginuser, logoutuser, userdata,userdata2};