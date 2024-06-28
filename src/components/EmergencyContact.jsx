import React from "react";
import { CiPhone } from "react-icons/ci";

function EmergencyContact() {
  return (
    <div className="bg-[url('https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-63889.jpg?w=1380&t=st=1719569028~exp=1719569628~hmac=9786f9d34a6c56baeb30766e5c5403b0e7e125292509d669879baef1647079e3')] bg-no-repeat bg-cover flex gap-12 items-center pt-12 md:px-20">
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
