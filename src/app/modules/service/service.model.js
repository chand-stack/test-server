const { Schema, model } = require("mongoose");

// Define the schema
const serviceSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  slot: {
    type: Number,
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
});

// Create a model based on the schema
const ServiceModel = model("Service", serviceSchema);

// Export the model
module.exports = ServiceModel;
