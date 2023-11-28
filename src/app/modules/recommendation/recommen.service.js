const express = require("express");
const RecommendModel = require("./recommen.model");

const createRecommendService = async (data) => {
  const createRecommend = await RecommendModel.create(data);
  return createRecommend;
};

const getRecommendService = async () => {
  const getRecommend = await RecommendModel.find();
  return getRecommend;
};

module.exports = {
  createRecommendService,
  getRecommendService,
};
