
const express = require("express")

const router = express.Router();
const authenticate = require("../middlewares/authenticate")
const authorise = require("../middlewares/authorise")


const Product = require("../models/product.model")

router.post("",  async (req, res) => {

    try {
        // if new user, create it or allow to register;
        let loggeduser = await Product.create(req.body);
        // const token = generateToken(user);
        return res.status(200).send(loggeduser);
      } catch (err) {
        return res.status(400).send({ message: err.message });
      }
 
})



router.get("", async (req, res) => {
    try{
        const loggeduser = await Product.find()
        return res.status(200).send(loggeduser)
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
})

module.exports = router;