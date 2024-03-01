const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost:27017/auth_user")
    .then(()=> console.log("Database Connected..."))
    .catch(err=>{
        console.log("An error occured while connecting to database:",err);
    })

const userschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, {timestamps: true}
)

const User = mongoose.model("user",userschema);

module.exports = User;