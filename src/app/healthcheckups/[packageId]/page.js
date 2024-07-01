import BreadCrumb from "@/components/BreadCrumb";
import ProductDetails from "@/components/healthPackagesPage/ProductDetails";
import React from "react";

function page({ params }) {
  return (
    <div className="bg-gray-100">
      <BreadCrumb />
      <ProductDetails />
    </div>
  );
}

export default page;
