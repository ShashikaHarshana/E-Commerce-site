import express from "express";
import {
  createOrder,
  deleteOrder,
  getAllOrders,
  updateOrder,
} from "../controllers/orderController.js";

const router = express.Router();

router.get("/", getAllOrders);
router.post("/", createOrder);
router.patch("/:id", updateOrder);
router.delete("/:id", deleteOrder);

export default router;
