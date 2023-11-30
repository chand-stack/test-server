const { Schema, model } = require("mongoose");

const bannerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  couponcode: {
    type: String,
    required: true,
  },
  couponrate: {
    type: Number,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
});

const BannerModel = model("Banner", bannerSchema);

module.exports = BannerModel;
