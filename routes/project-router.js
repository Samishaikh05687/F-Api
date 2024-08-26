const express = require('express');
const router = express.Router();
const Project = require('../models/project-model');

router.get('/services', async (req, res) => {
    try {
        const services = await Project.find();

        if (services.length === 0) {
            return res.status(404).json({ msg: "No services found" });
        }

        res.status(200).json(services);  // Directly return the services array
    } catch (err) {
        res.status(500).json({ msg: err.message });  // Keep the error message key consistent with the rest
    }
});

// router.post('/', async (req, res) => {
//     const project = new Project({
//         projectimage: req.body.projectimage,
//         projectname: req.body.projectname,
//         projectdescription: req.body.projectdescription
        
//     });

//     try {
//         const newProject= await project.save();
//         res.status(201).json(newProject);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// });

module.exports = router;
