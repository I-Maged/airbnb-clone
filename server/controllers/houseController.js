const asyncHandler = require('express-async-handler');

const House = require('../models/houseModel');

// @desc    Create new house
// @route   POST /api/houses
// @access  Private
const createHouse = asyncHandler(async (req, res) => {
  const { location, description, price } = req.body;

  if (!location || !description || !price) {
    res.status(400);
    throw new Error('Please add a location, description and price');
  }

  const house = await House.create({
    location,
    description,
    price,
    user: req.user.id,
  });

  res.status(201).json(house);
});

// @desc    GET all houses
// @route   GET /api/houses
// @access  Public
const getAllHouses = asyncHandler(async (_, res) => {
  const houses = await House.find();

  res.status(200).json(houses);
});

module.exports = {
  createHouse,
  getAllHouses,
};
