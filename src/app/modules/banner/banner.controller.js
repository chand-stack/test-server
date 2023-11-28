const express = require("express");
const { createBannerService, getBannerService } = require("./banner.service");

const createBannerController = async (req, res) => {
  try {
    const data = req.body;
    const banner = await createBannerService(data);
    res.status(201).json({
      status: "success",
      message: "successfully created a new service",
      data: banner,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "somethin went wrong",
      data: error,
    });
  }
};

const getBannerController = async (req, res) => {
  try {
    const banner = await getBannerService();
    res.status(201).json({
      status: "success",
      message: "successfully created a new service",
      data: banner,
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
  createBannerController,
  getBannerController,
};
