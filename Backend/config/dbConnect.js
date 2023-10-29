import mongoose from "mongoose";

const dbConnect = () => {
  try {
    const connection = mongoose.connect(
      `mongodb+srv://test-user:hi123456@ecommerce-site.y9ui9jh.mongodb.net/?retryWrites=true&w=majority`
    );
    if (connection) {
      console.log("dbConnected");
    }
  } catch (error) {
    console.log("db error", error);
  }
};

export { dbConnect };
