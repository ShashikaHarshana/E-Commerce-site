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
