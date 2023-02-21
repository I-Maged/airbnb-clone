const express = require('express');
const router = express.Router();

const { protect } = require('../middleware/authMiddleware');

const {
  getAllHouses,
  getHouse,
  getUserHouses,
  getUserSingleHouse,
  createHouse,
  updateHouse,
  deleteHouse,
} = require('../controllers/houseController');

//public routes
router.route('/').get(getAllHouses);
router.route('/:id').get(getHouse);

//private routes for user
router.route('/user').get(protect, getUserHouses).post(protect, createHouse);
router
  .route('/user/:id')
  .get(protect, getUserSingleHouse)
  .put(protect, updateHouse)
  .delete(protect, deleteHouse);

module.exports = router;
