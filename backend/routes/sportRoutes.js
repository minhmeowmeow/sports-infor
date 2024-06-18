const express = require('express');
const router = express.Router();
const sportController = require('../controllers/sportController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/sports', sportController.getAllSports);
router.get('/sports/:id', sportController.getSportById);
router.post('/sports', authMiddleware, sportController.createSport);
router.put('/sports/:id', authMiddleware, sportController.updateSport);
router.delete('/sports/:id', authMiddleware, sportController.deleteSport);

module.exports = router;
