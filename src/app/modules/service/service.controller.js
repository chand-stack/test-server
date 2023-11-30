const express = require("express");
const {
  createServiceService,
  getAllServiceService,
  getSingleServiceService,
  deleteSingleServiceService,
  updateSingleServiceService,
  getServiceCountService,
} = require("./service.service");

const createServiceController = async (req, res) => {
  try {
    // take the data from request body
    const data = req.body;

    //   call create service
    const service = await createServiceService(data);
    //   after responsing
    res.status(201).json({
      status: "success",
      message: "successfully created a new service",
      data: service,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "something went wrong",
      data: error,
    });
  }
};

const getAllServiceController = async (req, res) => {
  try {
    const page = parseInt(req.query.page);
    const size = parseInt(req.query.size);
    const service = await getAllServiceService(page, size);
    res.status(200).json({
      status: "success",
      message: "successfully get data",
      data: service,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "something went wrong",
      data: error,
    });
  }
};

const getSingleServiceController = async (req, res) => {
  try {
    const id = req.params.id;
    const service = await getSingleServiceService(id);
    res.status(200).json({
      status: "success",
      message: "successfully get data",
      data: service,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "something went wrong",
      data: error,
    });
  }
};

const deleteSingleServiceController = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteService = await deleteSingleServiceService(id);
    res.status(201).json({
      status: "success",
      message: "successfully deleted",
      data: deleteService,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "something went wrong",
      data: error,
    });
  }
};

const updateSingleServiceController = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    console.log(data);
    const updatedService = await updateSingleServiceService(id, data);
    res.status(201).json({
      status: "success",
      message: "successfully updated",
      data: updatedService,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "something went wrong",
      data: error,
    });
  }
};

const getServiceCountController = async (req, res) => {
  try {
    const count = await getServiceCountService();
    res.status(201).json({
      status: "success",
      message: "successfully get count",
      data: count,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "something went wrong",
      data: error,
    });
  }
};

module.exports = {
  createServiceController,
  getAllServiceController,
  getSingleServiceController,
  deleteSingleServiceController,
  updateSingleServiceController,
  getServiceCountController,
};

// controller er moddhe business logic hobe
