const express = require("express");

const router = express.Router();

const SpreadSheet = require("../models/spreadsheet.model");

router.post("", async (req, res) => {

  try {
    let spreadsheet = await SpreadSheet.findOne({ _id: req.body._id });
    if (spreadsheet) {
      console.log("spreadsheet found");
      console.log("count", req.body.count);
      await SpreadSheet.findOneAndUpdate(
        { sheet: req.body.sheet, tab: req.body.tab, count: req.body.count },
        { $set: { count: req.body.count + 1 } },
        { new: true }
      );
     
    } else {
      spreadsheet = await SpreadSheet.create(req.body);
    }
    return res.status(200).send(spreadsheet);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const spreadsheet = await SpreadSheet.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    return res.status(200).send(spreadsheet);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});

router.get("", async (req, res) => {
  try {
    const spreadsheet = await SpreadSheet.find();
    return res.status(200).send(spreadsheet);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});

module.exports = router;
