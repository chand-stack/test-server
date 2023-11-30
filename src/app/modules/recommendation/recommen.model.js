const { Schema, model } = require("mongoose");

const recommenSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  recommend: {
    type: String,
    required: true,
  },
});

const RecommendModel = model("Recommend", recommenSchema);

module.exports = RecommendModel;
