const mongoose=require("mongoose");

const connect=()=>{return mongoose.connect(
  "mongodb+srv://Rutu:RutujaAtlas@cluster0.4soie.mongodb.net/grrendeck?retryWrites=true&w=majority"
);
};


module.exports=connect;
