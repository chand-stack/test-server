const express = require("express");
const {
  createBannerService,
  getBannerService,
  deleteBannerService,
  selectBannerService,
  unselectBannerService,
} = require("./banner.service");

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

const deleteBannerController = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteBanner = await deleteBannerService(id);
    res.status(201).json({
      status: "success",
      message: "successfully deleted Banner",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "somethin went wrong",
      data: error,
    });
  }
};

const selectBannerController = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const banner = await selectBannerService(id, data);
    res.status(201).json({
      status: "success",
      message: "successfully banner selected",
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

const unselectBannerController = async (req, res) => {
  try {
    const Ids = req.body;
    console.log(Ids);
    const data = {
      isActive: false,
    };
    const unselectBanner = await unselectBannerService(Ids, data);
    res.status(201).json({
      status: "success",
      message: "successfully banner selected",
      data: unselectBanner,
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
  deleteBannerController,
  selectBannerController,
  unselectBannerController,
};
