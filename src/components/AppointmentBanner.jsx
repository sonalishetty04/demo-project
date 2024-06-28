import React from "react";
import { Button } from "./ui/button";
import { CiPhone } from "react-icons/ci";

function AppointmentBanner() {
  return (
    <div className="relative w-full h-96 md:h-[600px] text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.manipalhospitals.com/malleshwaram/uploads/page-banners/Banners_MH-Old-Airport-Road_1920x520_64.png')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 px-10 md:p-44 flex flex-col items-start justify-center h-full">
        <h1 className="font-medium md:text-4xl text-lg">
          Need Help in Appointment?
        </h1>
        <h3 className="md:text-2xl text-base my-2">
          Our Experts Are Here To Help You
        </h3>
        <p className="flex items-center my-8 text-xl">
          <CiPhone className="mr-2" />
          18002025657
        </p>
        <Button className="bg-teal-500 py-6 px-8">Book an Appointment</Button>
      </div>
    </div>
  );
}

export default AppointmentBanner;
