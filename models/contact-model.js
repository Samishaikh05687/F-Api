const { Schema, model } = require("mongoose");
const contactSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: Number, required: true },
  city: { type: String, required: true },
});

const Contact = new model("Contact", contactSchema);

module.exports = Contact;
