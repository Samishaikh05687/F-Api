const { Schema, model } = require("mongoose");

const clientSchema = new Schema({
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
});

const Customer = new model("Client", clientSchema);

module.exports = Customer;
