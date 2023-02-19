const mongoose = require('mongoose');

const houseSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    location: {
      type: String,
      required: [true, 'Please select a location'],
      enum: ['Cairo', 'Hurghada', 'Sharm El-Sheikh'],
    },
    description: {
      type: String,
      required: [true, 'Please enter a description of your house'],
    },
    price: {
      type: Number,
      required: [true, 'Please add price per night'],
    },
    discount: {
      type: Number,
      required: false,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('House', houseSchema);
