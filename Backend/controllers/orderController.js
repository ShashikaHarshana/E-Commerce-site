import asyncHandler from "express-async-handler";
import mongoose from "mongoose";
import { Order } from "../models/orderModel.js";
import { updateProduct } from "./productController.js";
import { Product } from "../models/productModel.js";
const ObjectId = mongoose.Types.ObjectId;

export const getAllOrders = asyncHandler(async (req, res) => {
  try {
    const orders = await Order.find().lean();
    const products = [];
    if (orders) {
      const result = await Promise.all(
        orders.map(async (element) => {
          for (const item of element.orderItemDetails) {
            const product = await Product.findById(item.productId).lean();
            item.productDetails = product;
          }
          return element;
        })
      );
      if (result) {
        res.json(orders);
      } else {
        throw new Error("Internal server Error");
      }
    }
  } catch (error) {
    throw new Error(error);
  }
});

export const createOrder = asyncHandler(async (req, res) => {
  try {
    const newOrder = await Order.create(req.body);
    if (newOrder) {
      res.json(newOrder);
    } else {
      throw new Error("Internal server Error");
    }
  } catch (error) {
    throw new Error(error);
  }
});

export const updateOrder = asyncHandler(async (req, res) => {
  try {
    const orderId = req.params;

    const updateOrder = await Order.findOneAndUpdate(
      new ObjectId(orderId),
      req.body,
      {
        new: true,
      }
    );
    if (updateProduct) {
      res.json({ msg: "order updated Successfully" });
    } else {
      throw new Error("Internal Server Error");
    }
  } catch (error) {
    throw new Error(error);
  }
});

export const deleteOrder = asyncHandler(async (req, res) => {
  const orderId = req.params;

  const deleteOrder = await Order.deleteOne(new ObjectId(orderId));

  if (deleteOrder) {
    res.json("order deleted Successfully.");
  }
});
