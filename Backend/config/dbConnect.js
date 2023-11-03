import mongoose from "mongoose";

const dbConnect = () => {
  try {
    const connection = mongoose.connect(
      `mongodb+srv://abeetha:abeetha123@cluster0.kisuivk.mongodb.net/?retryWrites=true&w=majority`
    );
    if (connection) {
      console.log("dbConnected");
    }
  } catch (error) {
    console.log("db error", error);
  }
};

export { dbConnect };
