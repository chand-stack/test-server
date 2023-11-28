const express = require("express");
const {
  createRecommendService,
  getRecommendService,
} = require("./recommen.service");

const createRecommenController = async (req, res) => {
  try {
    const data = req.body;
    const createRecommend = await createRecommendService(data);
    res.status(201).json({
      status: "success",
      message: "successfully created a new service",
      data: createRecommend,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "somethin went wrong",
      data: error,
    });
  }
};

const getAllRecommendController = async (req, res) => {
  try {
    const data = await getRecommendService();
    res.status(201).json({
      status: "success",
      message: "successfully created a new service",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "somethin went wrong",
      data: error,
    });
  }
};

module.exports = {
  createRecommenController,
  getAllRecommendController,
};
