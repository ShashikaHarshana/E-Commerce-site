import mongoose from "mongoose";
// Declare the Schema of the Mongo model
const orderSchema = new mongoose.Schema({
  orderItemDetails: [
    {
      productId: {
        type: String,
        required: true,
      },
      quantity: {
        type: String,
        required: true,
      },
    },
  ],
  buyerId: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  orderAccepted: {
    type: Boolean,
    default: false,
  },
});

//Export the model
export const Order = mongoose.model("Order", orderSchema);
