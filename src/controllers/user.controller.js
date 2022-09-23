const express = require("express");
const authenticate = require("../middlewares/authenticate");
const router = express.Router();
const User = require("../models/user.model");


// router.get("", authenticate, async (req, res) => {
//     try {
//       const keyword = req.query.search
//         ? {
//             $or: [
//               { name: { $regex: req.query.search, $options: "i" } },
//               { email: { $regex: req.query.search, $options: "i" } },
//             ],
//           }
//         : {};
//         const users = await User.find({ _id: { $ne: req.user._id } });
//         console.log(users)
//         console.log("req.user._id",req.user._id)
//       return res.status(200).send(users);
//     } catch (err) {
//       return res.status(400).send({ message: err.message });
//     }
//   });
// router.post("/", async (req, res) => {
//    // console.log(req.body)
//   try {
//     // if new user, create it or allow to register;
//     let user = await User.create(req.body);
//     // const token = generateToken(user);
//     return res.status(200).send(user);
//   } catch (err) {
//     return res.status(400).send({ message: err.message });
//   }
// });

module.exports = router;
