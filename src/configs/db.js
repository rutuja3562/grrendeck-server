const mongoose=require("mongoose");

const connect=()=>{return mongoose.connect(
  "mongodb+srv://Rutu:RutujaAtlas@cluster0.4soie.mongodb.net/grrendeck?retryWrites=true&w=majority"
//  "mongodb://localhost:27017/register-api"
//  "mongodb://127.0.0.1:27017/registerapigrrendeck"
);
};


module.exports=connect;
