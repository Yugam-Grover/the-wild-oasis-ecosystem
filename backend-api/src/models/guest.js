const mongoose = require("mongoose");

const guestSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Guest name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true,
    },
    nationalID: {
      type: String,
      required: true,
    },
    nationality: {
      type: String,
    },
    countryFlag: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const Guest = mongoose.model("Guest", guestSchema);

module.exports = Guest;
