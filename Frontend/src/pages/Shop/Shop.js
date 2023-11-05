import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import Pagination from "../../components/pageProps/shopPage/Pagination";
import axios from "axios";
import { addProducts } from "../../redux/dealMartSlice";
import { useDispatch, useSelector } from "react-redux";

const Shop = () => {
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    await axios
      .get("https://e-commerce-q6ap.onrender.com/api/product")
      .then((res) => {
        console.log(res.data);
        dispatch(addProducts(res.data));
        setLoading(false);
      });
  };
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Products" />
      {/* ================= Products Start here =================== */}
      <div className="w-full h-full flex pb-20 gap-10">
        <div className="w-full h-full flex flex-col gap-10">
          <Pagination itemsPerPage={itemsPerPage} />
        </div>
      </div>
      {/* ================= Products End here ===================== */}
    </div>
  );
};

export default Shop;
