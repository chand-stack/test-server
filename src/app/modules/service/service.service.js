const express = require("express");
const ServiceModel = require("./service.model");
const mongoose = require("mongoose");

const createServiceService = async (data) => {
  const createService = await ServiceModel.create(data);
  return createService;
};

const getAllServiceService = async () => {
  const findService = await ServiceModel.find();
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
  // const option = { upser: true };
  // const filter = { _id: id };
  try {
    const updatedData = {
      name: data.name,
      image: data.image,
      details: data.details,
      slot: data.slot,
      price: data.price,
      date: data.date,
    };
    console.log(updatedData);
    const updateService = await ServiceModel.updateOne(
      { _id: id },
      { $set: updatedData },
      { upsert: true }
    );
    return updateService;
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  createServiceService,
  getAllServiceService,
  getSingleServiceService,
  deleteSingleServiceService,
  updateSingleServiceService,
};

// database er shathe bojhapora hobe
