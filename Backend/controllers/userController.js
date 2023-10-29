import { Users } from "../models/userModel.js";

export const createUser = async (req, res) => {
  try {
    const email = req.body.email;
    const findUser = await Users.findOne({ email });

    if (!findUser) {
      // create new user
      const newUser = await Users.create(req.body);
      res.json(newUser);
    } else {
      // user already exists.
      res.json({
        msg: "User already exists...",
      });
    }
  } catch (error) {
    res.json("internal server error", error);
  }
};
