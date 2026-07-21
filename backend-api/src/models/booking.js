const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const bookingSchema = new mongoose.Schema(
  {
    bookingNumber: {
      type: Number,
      unique: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    numNights: {
      type: Number,
      required: true,
    },
    numGuests: {
      type: Number,
      required: true,
      min: 1,
      max: 10,
    },
    cabinPrice: {
      type: Number,
      required: true,
    },
    extraPrice: {
      type: Number,
      default: 0,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["unconfirmed", "checked-in", "checked-out"],
      default: "unconfirmed",
    },
    hasBreakfast: {
      type: Boolean,
      default: false,
    },
    isPaid: {
      type: Boolean,
      default: false,
    },
    observations: {
      type: String,
      default: "",
    },
    cabin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cabin",
      required: true,
    },
    guest: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Guest",
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

bookingSchema.plugin(AutoIncrement, { inc_field: "bookingNumber" });

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
