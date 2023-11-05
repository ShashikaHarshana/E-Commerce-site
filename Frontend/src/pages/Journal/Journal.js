import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addOrders } from "../../redux/dealMartSlice";
import OrderCard from "./Order";

const Journal = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const calculateTotal = (order) => {
    let total = 0;
    order.orderItemDetails.forEach(
      (item) => (total = total + item.productDetails.price * item.quantity)
    );
    return total;
  };

  const fetchOrders = async () => {
    setLoading(true);
    axios.get("https://e-commerce-q6ap.onrender.com/api/orders").then((res) => {
      console.log(res.data);
      dispatch(addOrders(res.data));
      setLoading(false);
    });
  };
  useEffect(() => {
    fetchOrders();
  }, []);

  const orders = useSelector((state) => state.dealMartReducer.orders);
  const user = useSelector((state) => state.dealMartReducer.user);
  const filterOrders = orders.filter((order) => order.buyerId === user._id);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="My Orders" />
      <div className="pb-10">
        {loading && (
          <div className="mb-10">
            <h1 className="font-titleFont">Loading....</h1>
          </div>
        )}
        {!loading &&
          (filterOrders.length > 0 ? (
            filterOrders.map((order) => {
              return (
                <div className="mt-5 border mb-10">
                  {order.orderItemDetails.map((item) => (
                    <div key={item._id}>
                      <OrderCard item={item} />
                    </div>
                  ))}
                  <div className="mt-10 ml-5 flex flex-col items-start mb-10 max-w-md">
                    <div className="flex justify-evenly mt-5">
                      <p className=" text-lg mr-2">Order Address:</p>
                      <p className="text-lg  font-bold">{order.address}</p>
                    </div>

                    <div className="flex justify-evenly mt-5">
                      <p className="text-lg mr-2">Order Status:</p>
                      <p className="text-lg font-bold">
                        {order.orderAccepted
                          ? "Order Completed"
                          : "Order Not Completed"}
                      </p>
                    </div>

                    <div className="flex justify-evenly mt-5">
                      <p className=" text-lg mr-2">Order Total:</p>
                      <p className="text-lg font-bold">
                        ${calculateTotal(order)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="mb-10">
              <h1 className="text-xl">No Orders Yet.</h1>
            </div>
          ))}

        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Journal;
