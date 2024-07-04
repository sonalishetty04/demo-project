import BreadCrumb from "@/components/BreadCrumb";
import FAQ from "@/components/healthPackagesPage/FAQ";
import ProductDetails from "@/components/healthPackagesPage/ProductDetails";
import React from "react";

function page({ params }) {
  return (
    <div className=" px-24 bg-gray-100 min-h-screen py-10">
      <BreadCrumb />
      <ProductDetails />
      <FAQ />
    </div>
  );
}

export default page;
