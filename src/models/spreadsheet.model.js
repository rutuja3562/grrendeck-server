const mongoose = require("mongoose");

const SpreadsheetSchema = new mongoose.Schema(

  {
    sheet: { type: String, required: true },
    tab: { type: String, required: true },
    count: { type: Number,  },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("sheet", SpreadsheetSchema);
