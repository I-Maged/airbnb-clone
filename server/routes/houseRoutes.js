const express = require('express');
const router = express.Router();

const { protect } = require('../middleware/authMiddleware');

const { createHouse, getAllHouses } = require('../controllers/houseController');

router.route('/').get(getAllHouses).post(protect, createHouse);

module.exports = router;
