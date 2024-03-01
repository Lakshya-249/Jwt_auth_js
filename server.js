const express = require("express");
const cookieparser = require("cookie-parser");
const {restrictouser,checkauth} = require("./middleware");
const router = require("./router");
const {userdata,userdata2} = require("./userware");

const app = express();

const port = 5000;

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cookieparser());

app.use("/userdata",restrictouser);
app.use("/userdata2",checkauth)

app.use("/user",router);
app.get("/userdata",userdata);
app.get("/userdata2",userdata2);


app.listen(port,()=>{
    console.log("server connected...");
})