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
    <div className="py-20 text-center text-blue-800">
      <h1 className="text-3xl">How It Works</h1>
      <div className="flex ">
        <div className="flex flex-col justify-center gap-5">
          <span>
            <FaUserNurse />
          </span>
          <h1>Select the consultation type and profile</h1>
        </div>
        <div></div>
        <div className="flex flex-col justify-center gap-5">
          <span>
            <MdOutlineMan2 />
          </span>
          <h1>Choose the location, speciality and doctor</h1>
        </div>
        <div className=" "></div>
        <div className="flex flex-col justify-center gap-5">
          <span>
            <IoCalendarClearOutline />
          </span>
          <h1>Book your appointment for the respective date and time</h1>
        </div>
        <div></div>
        <div className="flex flex-col justify-center gap-5">
          <span>
            <HiOutlineDevicePhoneMobile />,
          </span>
          <h1>Pay online or pay at the hospital</h1>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default HowItWorks;
