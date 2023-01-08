const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ecolesSchema = new Schema({
  ecolesdatasetid: { type: String },
  ecolesrecordid: { type: String },
  ecolesfields: { type: Object },
  ecolesgeometry: { type: Object },
  ecolesrecord_timestamp: { type: String },
});

module.exports = mongoose.model("ecoles", ecolesSchema);
