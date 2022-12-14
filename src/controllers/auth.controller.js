// const User = require("../models/user.model");
const User = require("../models/user.model");

const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateToken = (user) => {
  // console.log("jjj",user)
  // console.log("KK",process.env.SECRET_KEY)
  // console.log("Key",`process.env.${SECRET_KEY}`)
  return jwt.sign({ user }, `${process.env.SECRET_KEY}`);
};
const register = async (req, res) => {
    console.log( req.body.username)
  try {
    let user = await User.findOne({ username: req.body.username });
    //checking email
    if (user) {
        console.log("duplicate")
      return res.status(400).send({ message: "username already exists" });
    }
    // if new user, create it or allow to register;
    user = await User.create(req.body);
    const token = generateToken(user);
    return res.status(200).send({ user, token });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    //checked if mail exists
    if (!user) {
      return res.status(400).send("Wrong username or Password");
    }

    //if email exists, check password;
    const match = user.checkPassword(req.body.password);

    // if it doesn't match
    if (!match) {
      return res.status(400).send({ message: "Wrong Email or Password" });
    }

    // if it matches
    const token = generateToken(user);
    return res.status(200).send({ user, token });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

module.exports = { register, login, generateToken };
