const express = require('express');
const router = express.Router();

const { protect } = require('../middleware/authMiddleware');

const {
  createHouse,
  getAllHouses,
  getUserHouses,
  getHousePrivate,
} = require('../controllers/houseController');

router.route('/').get(getAllHouses);

router.route('/user').get(protect, getUserHouses).post(protect, createHouse);

router.route('/user/:id').get(protect, getHousePrivate);

module.exports = router;
