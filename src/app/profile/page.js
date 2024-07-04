import BreadCrumb from "@/components/BreadCrumb";
import UserProfile from "@/components/profile/UserProfile";
import React from "react";

function page() {
  return (
    <div className="bg-gray-100   pt-5 px-16">
      <BreadCrumb />
      <UserProfile />
    </div>
  );
}

export default page;
