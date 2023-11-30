const express = require("express");
const ReservationModel = require("./reservation.model");

const createReservationService = async (data) => {
  const createReservation = await ReservationModel.create(data);
  return createReservation;
};

const getReservationService = async (email) => {
  const getReservation = await ReservationModel.find(email);
  return getReservation;
};

const deleteReservationService = async (id) => {
  const deleteReservation = await ReservationModel.deleteOne({ _id: id });
  return deleteReservation;
};

const getAllreservationAdminService = async (query) => {
  const allReservation = await ReservationModel.find(query);
  return allReservation;
};

const updateReservationService = async (id, data) => {
  const updateReservation = await ReservationModel.findByIdAndUpdate(id, data, {
    new: true,
  });
  return updateReservation;
};

module.exports = {
  createReservationService,
  getReservationService,
  deleteReservationService,
  getAllreservationAdminService,
  updateReservationService,
};
