
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    email : {type : String, required : false, unique:true},
    username:{type : String, required : false, unique:true},
    password : {type : String, required : false},
},{
    timestamps : true,
    versionKey : false,
})

const Product = mongoose.model("loggeduser", productSchema)

module.exports = Product;