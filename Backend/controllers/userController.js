import { Users } from "../models/userModel.js";
import asyncHandler from "express-async-handler";

export const createUser = asyncHandler(async (req, res) => {
  try {
    const email = req.body.email;
    const findUser = await Users.findOne({ email });

    if (!findUser) {
      // create new user
      const newUser = await Users.create(req.body);
      res.json(newUser);
    } else {
      // user already exists.
      throw new Error("User Already Exists");
    }
  } catch (error) {
    throw new Error(error);
  }
});

export const loginUser = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;
    const findUser = await Users.findOne({ email }).lean();
    if (findUser) {
      if (password === findUser.password) {
        res.json(findUser);
      } else {
        throw new Error("Invalid Credentials.");
      }
    } else {
      throw new Error("No matching user found");
    }
  } catch (error) {
    throw new Error(error);
  }
});
