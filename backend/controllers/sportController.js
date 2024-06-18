const Sport = require('../models/sportModel');

exports.getAllSports = async (req, res) => {
    try {
        const sports = await Sport.findAll();
        res.json(sports);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getSportById = async (req, res) => {
    try {
        const sport = await Sport.findByPk(req.params.id);
        if (sport) {
            res.json(sport);
        } else {
            res.status(404).json({ error: 'Sport not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createSport = async (req, res) => {
    try {
        const sport = await Sport.create(req.body);
        res.status(201).json(sport);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateSport = async (req, res) => {
    try {
        const sport = await Sport.findByPk(req.params.id);
        if (sport) {
            await sport.update(req.body);
            res.json(sport);
        } else {
            res.status(404).json({ error: 'Sport not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteSport = async (req, res) => {
    try {
        const sport = await Sport.findByPk(req.params.id);
        if (sport) {
            await sport.destroy();
            res.json({ message: 'Sport deleted' });
        } else {
            res.status(404).json({ error: 'Sport not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
