const { Schema, model } = require("mongoose");

const projectSchema = new Schema({
  projectimage: {
    type: String,
    required: true,
  },
  projectname: {
    type: String,
    required: true,
  },
  projectdescription: {
    type: String,
    required: true,
  }
  
});

const Project = new model("Project", projectSchema);

module.exports = Project;
