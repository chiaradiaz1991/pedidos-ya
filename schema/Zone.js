
const mongoose = require('mongoose');

const ZonesSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    }
  },
);

module.exports = mongoose.model("Zone", ZonesSchema);