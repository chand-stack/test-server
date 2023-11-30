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

const deleteBannerService = async (id) => {
  const deleteBanner = await BannerModel.deleteOne({ _id: id });
  return deleteBanner;
};

const selectBannerService = async (id, data) => {
  const selectedBanner = await BannerModel.findByIdAndUpdate(id, data, {
    new: true,
  });
  return selectedBanner;
};

const unselectBannerService = async (ids, data) => {
  const unselectBanner = await BannerModel.updateMany(
    { _id: { $in: ids.Ids } },
    data,
    { new: true }
  );
  return unselectBanner;
};

module.exports = {
  createBannerService,
  getBannerService,
  deleteBannerService,
  selectBannerService,
  unselectBannerService,
};
