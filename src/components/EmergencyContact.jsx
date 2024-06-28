import React from "react";
import { CiPhone } from "react-icons/ci";

function EmergencyContact() {
  return (
    <div className="bg-teal-500 flex gap-12 items-center pt-20 md:px-20">
      <img
        src="https://www.lifesonmanipal.com/_next/image?url=%2Fimages%2FhomepageEmergencyContact2.webp&w=640&q=75 "
        alt="doctor"
      />

      <div className="text-white">
        <h1 className="text-4xl">Need Help Contact Emergency?</h1>
        <p className="text-gray-200 text-2xl my-4">
          Our Experts are here to help you
        </p>
        <span className="flex">
          <CiPhone className="text-2xl" />
          <p className="text-xl">1800 102 3222</p>
        </span>
      </div>
    </div>
  );
}

export default EmergencyContact;
