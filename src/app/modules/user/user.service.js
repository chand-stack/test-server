const express = require("express");
const UserModel = require("./user.model");

const createUserService = async (data) => {
  const user = UserModel.create(data);
  return user;
};
const getAllUserService = async () => {
  const getUser = UserModel.find();
  return getUser;
};

const makeAdminService = async (id, data) => {
  const makeAdmin = await UserModel.findByIdAndUpdate(id, data, { new: true });
  return makeAdmin;
};

const getSingleUserService = async (email) => {
  const getSingleUser = UserModel.findOne({ email: email });
  return getSingleUser;
};

module.exports = {
  createUserService,
  getAllUserService,
  makeAdminService,
  getSingleUserService,
};
