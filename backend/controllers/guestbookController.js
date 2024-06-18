const Guestbook = require('../models/guestbookModel');

exports.getGuestbookEntries = async (req, res) => {
    try {
        const entries = await Guestbook.findAll();
        res.json(entries);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.addGuestbookEntry = async (req, res) => {
    try {
        const newEntry = await Guestbook.create(req.body);
        res.status(201).json(newEntry);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
