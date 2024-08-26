const express = require('express');
const router = express.Router();
const Client = require('../models/client-model');

router.get('/customer', async (req, res) => {
    try {
        const response = await Client.find();
        if(!response){
            res.status(404).json({msg:"NO Service found"});
            return;
        }
        res.status(200).json({msg:response});
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    const client = new Client({
        image: req.body.image,
        description: req.body.description,
        name: req.body.name,
        designation: req.body.designation
    });

    try {
        const newClient = await client.save();
        res.status(201).json(newClient);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
