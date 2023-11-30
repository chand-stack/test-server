const express = require("express");
const {
  createUserService,
  getAllUserService,
  makeAdminService,
  getSingleUserService,
  makeUserAdminService,
  getAdminUserService,
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
    const filter = req.query;
    const query = {
      email: { $regex: filter.search, $options: "i" },
    };
    const getAllUser = await getAllUserService(query);
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
const makeUserAdminController = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    // console.log(id, data);
    const makeAdmin = await makeUserAdminService(id, data);
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

const adminUserController = async (req, res) => {
  try {
    const email = req.params.email;
    const user = await getAdminUserService(email);
    res.status(201).json({
      status: "success",
      message: "successfully get admin",
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
  makeUserAdminController,
  adminUserController,
};
