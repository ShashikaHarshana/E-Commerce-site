import express from "express";
import { dbConnect } from "./config/dbConnect.js";
import authRouter from "./routes/authRoute.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

dbConnect();
app.get("/", (req, res) => {
  try {
    debugger;
    res.json("hello from backend");
  } catch (error) {}
});

app.use("/api/user", authRouter);

app.listen(port, () => {
  console.log(`Backend server started... listening in port ${port}`);
});
