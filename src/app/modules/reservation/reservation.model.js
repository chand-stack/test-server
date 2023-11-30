const { Schema, model } = require("mongoose");

// Define the schema
const reservationSchema = new Schema({
  testName: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  transactionId: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

// Create a model based on the schema
const ReservationModel = model("Reservation", reservationSchema);

// Export the model
module.exports = ReservationModel;
