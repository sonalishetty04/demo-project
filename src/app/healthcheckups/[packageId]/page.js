import ProductDetails from "@/components/healthPackagesPage/ProductDetails";
import React from "react";

function page({ params }) {
  return (
    <div className="bg-gray-100">
      <ProductDetails />
    </div>
  );
}

export default page;
