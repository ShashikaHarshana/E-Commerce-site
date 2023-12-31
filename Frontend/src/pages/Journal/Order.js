import React from "react";
import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";
import {
  deleteItem,
  drecreaseQuantity,
  increaseQuantity,
} from "../../redux/dealMartSlice";

const OrderCard = ({ item }) => {
  console.log(item);
  const dispatch = useDispatch();
  return (
    <div className="w-full grid grid-cols-5">
      <div className="flex col-span-5 mdl:col-span-2 items-center gap-4 ml-4">
        <img
          className="w-32 h-32"
          src={`data:image/jpeg;base64,${item.productDetails.image}`}
          alt="productImage"
        />
        <h1 className="font-titleFont font-semibold">
          {item.productDetails.name}
        </h1>
      </div>
      <div className="col-span-5 mdl:col-span-3 flex items-center justify-between py-4 mdl:py-0 px-4 mdl:px-0 gap-6 mdl:gap-0">
        <div className="flex w-1/3 items-center text-lg font-semibold">
          ${item.productDetails.price}
        </div>
        <div className="flex w-1/3 items-center text-lg font-semibold">
          {item.quantity}
        </div>
        <div className="w-1/3 flex items-center font-titleFont font-bold text-lg">
          <p>${item.quantity * item.productDetails.price}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
