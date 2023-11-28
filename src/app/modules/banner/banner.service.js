const express = require("express");
const BannerModel = require("./banner.model");

const createBannerService = async (data) => {
  const createBanner = BannerModel.create(data);
  return createBanner;
};

const getBannerService = async () => {
  const getBanner = BannerModel.find();
  return getBanner;
};

module.exports = {
  createBannerService,
  getBannerService,
};
