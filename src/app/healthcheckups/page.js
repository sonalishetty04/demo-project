import BreadCrumb from "@/components/BreadCrumb";
import HealthPackages from "@/components/HealthPackages";
import FAQ from "@/components/healthPackagesPage/FAQ";
import ProductListing from "@/components/healthPackagesPage/ProductListing";
import React from "react";

function page() {
  return (
    <div className="px-14 bg-gray-100 min-h-screen py-10">
      <BreadCrumb />
      <ProductListing />
      <FAQ />
    </div>
  );
}

export default page;
