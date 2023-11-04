import express from "express";
import { dbConnect } from "./config/dbConnect.js";
import authRouter from "./routes/authRoute.js";
import productRouter from "./routes/productRoute.js";
import orderRouter from "./routes/orderRoute.js";

import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";

import { errorHandler, notFound } from "./middlewares/errorHandler.js";

const app = express();
const port = 8000;

app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: false, limit: "50mb" }));
app.use(cors());

dbConnect();
app.get("/", (req, res) => {
  try {
    debugger;
    res.json("hello from backend");
  } catch (error) {}
});

app.use("/api/user", authRouter);
app.use("/api/product", productRouter);
app.use("/api/orders", orderRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Backend server started... listening in port ${port}`);
});
