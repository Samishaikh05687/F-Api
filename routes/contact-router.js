// router/contact-router.js
const express = require('express');
const router = express.Router();
const Contact = require('../models/contact-model'); // Adjust this path if needed

// Example POST route for handling form submissions
router.post('/', async (req, res) => {
    try {
        const contact = new Contact({
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile,
            city: req.body.city
        });
        const savedContact = await contact.save();
        res.status(201).json(savedContact);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Optionally, you could add more routes (e.g., GET, DELETE)

module.exports = router;
