const express = require("express");
const UserModel = require("./user.model");

const createUserService = async (data) => {
  const user = UserModel.create(data);
  return user;
};
const getAllUserService = async (query) => {
  const getUser = await UserModel.find(query);
  return getUser;
};

const makeAdminService = async (id, data) => {
  const makeAdmin = await UserModel.findByIdAndUpdate(id, data, { new: true });
  return makeAdmin;
};

const makeUserAdminService = async (id, data) => {
  const makeAdmin = await UserModel.findByIdAndUpdate(id, data, { new: true });
  return makeAdmin;
};

const getSingleUserService = async (email) => {
  const getSingleUser = await UserModel.findOne({ email: email });
  return getSingleUser;
};

const getAdminUserService = async (email) => {
  const getAdmin = await UserModel.findOne({ email: email });
  return getAdmin;
};

module.exports = {
  createUserService,
  getAllUserService,
  makeAdminService,
  getSingleUserService,
  makeUserAdminService,
  getAdminUserService,
};
