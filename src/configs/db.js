const mongoose=require("mongoose");

const connect=()=>{return mongoose.connect(
  "mongodb+srv://Rutu:Rutuatlas3562@cluster0.4soie.mongodb.net/registerapigrrendeck?retryWrites=true&w=majority"
  // "mongodb+srv://rutuja:Rutuja_3562@cluster0.orwkt.mongodb.net/test"
//  "mongodb://localhost:27017/register-api"
//  "mongodb://127.0.0.1:27017/registerapigrrendeck"
);
};


module.exports=connect;
