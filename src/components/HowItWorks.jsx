import React from "react";
import { FaUserNurse } from "react-icons/fa";
import { MdOutlineMan2 } from "react-icons/md";
import { IoCalendarClearOutline } from "react-icons/io5";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";

function HowItWorks() {
  const processList = [
    {
      id: 1,
      icon: <FaUserNurse />,
      title: "Select the consultation type and profile",
    },
    {
      id: 2,
      icon: <MdOutlineMan2 />,
      title: "Choose the location, speciality and doctor",
    },
    {
      id: 3,
      icon: <IoCalendarClearOutline />,
      title: "Book your appointment for the respective date and time",
    },
    {
      id: 4,
      icon: <HiOutlineDevicePhoneMobile />,
      title: "Pay online or pay at the hospital",
    },
  ];
  return (
    <div className="py-20  px-40 text-center text-blue-800">
      <h1 className="text-3xl mb-8">How It Works</h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="flex flex-col items-center gap-5">
          <span className="text-3xl">
            <FaUserNurse />
          </span>
          <h1>Select the consultation type and profile</h1>
        </div>
        <div className=" md:block w-[1px] h-12 md:w-32 md:h-[2px] bg-blue-800"></div>
        <div className="flex flex-col items-center gap-5">
          <span className="text-3xl">
            <MdOutlineMan2 />
          </span>
          <h1>Choose the location, specialty, and doctor</h1>
        </div>
        <div className=" md:block w-[1px] h-12 md:w-32 md:h-[2px] bg-blue-800"></div>
        <div className="flex flex-col items-center gap-5">
          <span className="text-3xl">
            <IoCalendarClearOutline />
          </span>
          <h1>Book your appointment for the respective date and time</h1>
        </div>
        <div className=" md:block w-[1px] h-12 md:w-32 md:h-[2px] bg-blue-800"></div>
        <div className="flex flex-col items-center gap-5">
          <span className="text-3xl">
            <HiOutlineDevicePhoneMobile />
          </span>
          <h1>Pay online or pay at the hospital</h1>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
