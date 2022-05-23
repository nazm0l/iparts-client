import React from "react";
import useParts from "../../hooks/useParts";
import Loading from "../Shared/Loading";
import Product from "./Product";

const Products = () => {
  const [parts] = useParts();

  if (parts.length === 0) {
    return <Loading></Loading>
  }

  return (
    <div className="my-10">
      <h2 className="text-3xl font-bold text-center">All Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {parts.slice(0, 6).map((part) => (
          <Product key={part._id} part={part} />
        ))}
      </div>
    </div>
  );
};

export default Products;
