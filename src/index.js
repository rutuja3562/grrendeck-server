const express = require("express");
const connect = require("./configs/db");
const cors = require("cors");
const userController = require("./controllers/user.controller");
const productController = require("./controllers/product.controller");
const spreadsheetController = require("./controllers/spreadsheet.controller");

const port = process.env.PORT || 5000;
require("dotenv").config();
const {
  register,
  login,
  generateToken,
} = require("./controllers/auth.controller");
const app = express();
// const passport = require("./configs/google-oauth")

app.use(express.json());
app.use(cors());

app.use("/users", userController);

app.post("/register", register);

app.post("/login", login);

app.use("/products", productController);
app.use("/sheets", spreadsheetController);

// app.get('/auth/google',
//   passport.authenticate('google', { scope: ['profile', 'email'] }));

// app.get(
// '/auth/google/callback',
//   passport.authenticate('google', { failureRedirect: '/login', session:false } ),
//   function(req, res) {
//     const token = generateToken(req.user)
//     return res.status(200).send({user:req.user, token})
//   }
// )

app.listen(port, async () => {
  try {
    await connect();
    console.log("listening on port 5000");
  } catch (err) {
    console.log(err.message);
  }
});
