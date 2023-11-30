const express = require("express");
const ServiceModel = require("./service.model");
const mongoose = require("mongoose");

const createServiceService = async (data) => {
  const createService = await ServiceModel.create(data);
  return createService;
};

const getAllServiceService = async (page, size) => {
  const findService = await ServiceModel.find()
    .skip(page * size)
    .limit(size);
  return findService;
};

const getSingleServiceService = async (id) => {
  const findSingleService = await ServiceModel.findOne({ _id: id });
  return findSingleService;
};

const deleteSingleServiceService = async (id) => {
  const deleteService = await ServiceModel.deleteOne({ _id: id });
  return deleteService;
};

const updateSingleServiceService = async (id, data) => {
  try {
    const updateSingleService = await ServiceModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    return updateSingleService;
  } catch (error) {
    console.log(error);
  }
};

const getServiceCountService = async () => {
  const serviceCount = await ServiceModel.countDocuments();
  return serviceCount;
};
module.exports = {
  createServiceService,
  getAllServiceService,
  getSingleServiceService,
  deleteSingleServiceService,
  updateSingleServiceService,
  getServiceCountService,
};
