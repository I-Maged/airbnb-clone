const asyncHandler = require('express-async-handler');

const House = require('../models/houseModel');

// @desc    GET all houses
// @route   GET /api/houses
// @access  Public
const getAllHouses = asyncHandler(async (_, res) => {
  const houses = await House.find();

  res.status(200).json(houses);
});

// @desc    GET single house
// @route   GET /api/houses/:id
// @access  Public
const getHouse = asyncHandler(async (req, res) => {
  const house = await House.findById(req.params.id);

  if (!house) {
    res.status(404);
    throw new Error('House not found');
  }

  res.status(200).json(house);
});

// @desc    GET user houses
// @route   GET /api/houses/user
// @access  Private
const getUserHouses = asyncHandler(async (req, res) => {
  const houses = await House.find({ user: req.user.id });

  res.status(200).json(houses);
});

// @desc    Get user house
// @route   GET /api/houses/user/:id
// @access  Private
const getUserSingleHouse = asyncHandler(async (req, res) => {
  const house = await House.findById(req.params.id);

  if (!house) {
    res.status(404);
    throw new Error('House not found');
  }

  if (house.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('Not Authorized');
  }

  res.status(200).json(house);
});

// @desc    Create new house
// @route   POST /api/houses/user
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

// @desc    Update house
// @route   PUT /api/houses/user/:id
// @access  Private
const updateHouse = asyncHandler(async (req, res) => {
  const house = await House.findById(req.params.id);

  if (!house) {
    res.status(404);
    throw new Error('House not found');
  }

  if (house.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('Not Authorized');
  }

  const updatedHouse = await Ticket.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedHouse);
});

// @desc    Delete house
// @route   DELETE /api/houses/user/:id
// @access  Private
const deleteHouse = asyncHandler(async (req, res) => {
  const house = await House.findById(req.params.id);

  if (!house) {
    res.status(404);
    throw new Error('House not found');
  }

  if (house.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('Not Authorized');
  }

  await house.remove();

  res.status(200).json({ success: true });
});

module.exports = {
  getAllHouses,
  getHouse,
  getUserHouses,
  getUserSingleHouse,
  createHouse,
  updateHouse,
  deleteHouse,
};
