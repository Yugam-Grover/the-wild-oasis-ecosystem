const mongoose = require("mongoose");

const settingSchema = new mongoose.Schema(
  {
    minBookingLength: {
      type: Number,
      default: 2,
    },
    maxBookingLength: {
      type: Number,
      default: 90,
    },
    maxGuestsPerBooking: {
      type: Number,
      default: 10,
    },
    breakfastPrice: {
      type: Number,
      default: 15,
    },
  },
  {
    timestamps: true,
  },
);

const Setting = mongoose.model("Setting", settingSchema);

module.exports = Setting;
