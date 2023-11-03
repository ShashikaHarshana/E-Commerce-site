import mongoose from "mongoose";
import { Product } from "../models/productModel.js";
import asyncHandler from "express-async-handler";
const ObjectId = mongoose.Types.ObjectId;

export const createProduct = asyncHandler(async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    if (newProduct) {
      res.json(newProduct);
    } else {
      throw new Error("Internal server error");
    }
  } catch (error) {
    throw new Error(error);
  }
});

export const getSingleProduct = asyncHandler(async (req, res) => {
  const productId = req.params;
  try {
    const findProduct = await Product.findOne(new ObjectId(productId));
    res.json(findProduct);
  } catch (error) {
    throw new Error(error);
  }
});

export const getAllProducts = asyncHandler(async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.json(allProducts);
  } catch (error) {
    throw new Error(error);
  }
});

export const updateProduct = asyncHandler(async (req, res) => {
  const productId = req.params;
  try {
    const product = await Product.findOneAndUpdate(
      new ObjectId(productId),
      req.body,
      {
        new: true,
      }
    );
    if (product) {
      res.json({ msg: "product updated Successfully" });
    } else {
      throw new Error("internal server error");
    }
  } catch (error) {
    throw new Error(error);
  }
});

export const deleteProduct = asyncHandler(async (req, res) => {
  const productId = req.params;
  try {
    const deleteProduct = await Product.deleteOne(new ObjectId(productId));
    if (deleteProduct) {
      res.json({ msg: `product deleted..` });
    } else {
      throw new Error("internal server error");
    }
  } catch (error) {
    throw new Error(error);
  }
});
