import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { useDispatch, useSelector } from "react-redux";
import { addOrders } from "../../redux/dealMartSlice";
import axios from "axios";

const Payment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [checked, setChecked] = useState(false);
  const cart = useSelector((state) => state.dealMartReducer.cart);
  const user = useSelector((state) => state.dealMartReducer.user);
  const order = {
    orderItemDetails: [],
    buyerId: user._id,
    address: "test order address",
  };
  const handleClick = () => {
    navigate("/shop");
    cart.forEach((element) => {
      order.orderItemDetails.push({
        productId: element._id,
        quantity: element.quantity,
      });
    });
    console.log(order);
    axios.post("https://e-commerce-q6ap.onrender.com/api/orders", order);
  };
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Payment gateway" />
      <form action="">
        <div className="pb-10 lgl:w-[450px]">
          <p className="text-base">Choose a payment method</p>
          <div className="mt-10 flex flex-col space-y-2">
            <div className="flex items-center justify-between">
              <label for="card" className="font-bold">
                Visa/Card
              </label>
              <input
                type="radio"
                className="h-8 w-8"
                id="card"
                name="fav_language"
                value="CSS"
              />
            </div>

            <br />
            <div className="flex items-center justify-between">
              <label for="cash" className="font-bold">
                Cash on Delivery
              </label>
              <input
                type="radio"
                className="h-8 w-8 "
                id="cash"
                name="fav_language"
                value="JavaScript"
              />
            </div>
          </div>
        </div>
      </form>
      <div className="lgl:w-[450px]">
        <button
          onClick={handleClick}
          className="bg-primeColor hover:bg-black text-gray-200 hover:text-white cursor-pointer w-full text-base font-medium h-10  rounded-md  duration-300"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Payment;
