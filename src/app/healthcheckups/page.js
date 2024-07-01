import BreadCrumb from "@/components/BreadCrumb";
import HealthPackages from "@/components/HealthPackages";
import FAQ from "@/components/healthPackagesPage/FAQ";
import ProductListing from "@/components/healthPackagesPage/ProductListing";
import React from "react";

function page() {
  return (
    <div className="">
      <BreadCrumb />
      <ProductListing />
      <FAQ />
    </div>
  );
}

export default page;
