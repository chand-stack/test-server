const express = require("express");
const {
  createUserService,
  getAllUserService,
  makeAdminService,
  getSingleUserService,
} = require("./user.service");

const createUserController = async (req, res) => {
  try {
    const data = req.body;
    const createUser = await createUserService(data);
    res.status(201).json({
      status: "success",
      message: "user created successfully",
      data: createUser,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "something went wrong",
      data: error,
    });
  }
};

const getAllUserController = async (req, res) => {
  try {
    const getAllUser = await getAllUserService();
    res.status(201).json({
      status: "success",
      message: "successfully get data",
      data: getAllUser,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "something went wrong",
      data: error,
    });
  }
};

const makeAdminController = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    // console.log(id, data);
    const makeAdmin = await makeAdminService(id, data);
    res.status(201).json({
      status: "success",
      message: "successfully make admin",
      data: makeAdmin,
    });
  } catch (error) {
    res.status(501).json({
      status: "error",
      message: "something went wrong",
      data: error,
    });
  }
};

const getSingleUserController = async (req, res) => {
  try {
    const email = req.params.email;
    const user = await getSingleUserService(email);
    res.status(201).json({
      status: "success",
      message: "successfully get user",
      data: user,
    });
  } catch (error) {
    res.status(501).json({
      status: "error",
      message: "something went wrong",
      data: error,
    });
  }
};
module.exports = {
  createUserController,
  getAllUserController,
  makeAdminController,
  getSingleUserController,
};
