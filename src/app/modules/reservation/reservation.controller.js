const express = require("express");
const {
  createReservationService,
  getReservationService,
  deleteReservationService,
  getAllreservationAdminService,
  updateReservationService,
} = require("./reservation.service");

const createReservationController = async (req, res) => {
  try {
    const data = req.body;
    const createReservation = await createReservationService(data);
    res.status(201).json({
      status: "success",
      message: "successfully created a new reservation",
      data: createReservation,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "something went wrong",
      data: error,
    });
  }
};

const getAllReservationController = async (req, res) => {
  try {
    let email = {};
    if (req?.params?.email) {
      email = { email: req?.params?.email };
    }
    const reservation = await getReservationService(email);
    res.status(201).json({
      status: "success",
      message: "successfully created a new reservation",
      data: reservation,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "something went wrong",
      data: error,
    });
  }
};

const deleteReservationController = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteReservation = await deleteReservationService(id);
    res.status(201).json({
      status: "success",
      message: "successfully created a new reservation",
      data: deleteReservation,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "something went wrong",
      data: error,
    });
  }
};

const getAllReservationAdminController = async (req, res) => {
  try {
    const filter = req.query;
    const query = {
      email: { $regex: filter.search, $options: "i" },
    };
    const reservation = await getAllreservationAdminService(query);
    res.status(201).json({
      status: "success",
      message: "successfully created a new reservation",
      data: reservation,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "something went wrong",
      data: error,
    });
  }
};
const updateReservationController = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const reservation = await updateReservationService(id, data);
    res.status(201).json({
      status: "success",
      message: "successfully created a new reservation",
      data: reservation,
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
  createReservationController,
  getAllReservationController,
  deleteReservationController,
  getAllReservationAdminController,
  updateReservationController,
};
