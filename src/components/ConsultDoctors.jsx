import React from "react";
import { BsHeartPulse } from "react-icons/bs";
import { LiaRibbonSolid } from "react-icons/lia";
import { LuBone } from "react-icons/lu";
import { PiBrain } from "react-icons/pi";
import { GiStomach } from "react-icons/gi";
import { FaStethoscope } from "react-icons/fa";

function ConsultDoctors() {
  const serviceIcon = [
    {
      id: 1,
      icon: <LiaRibbonSolid />,
      title: "Cancer Care",
    },
    {
      id: 2,
      icon: <BsHeartPulse />,
      title: "Cardiology",
    },
    {
      id: 3,
      icon: <LuBone />,
      title: "Ortho",
    },
    {
      id: 4,
      icon: <PiBrain />,
      title: "Neurology",
    },
    {
      id: 5,
      icon: <GiStomach />,
      title: "  Gastereo",
    },
  ];
  return (
    <div className="lg:px-28 pt-10 pb-24 px-6">
      <div className="flex gap-8 mb-10 items-center ">
        <span className="text-white p-4 text-lg bg-custom-gradient rounded-full hidden md:block">
          <FaStethoscope />
        </span>
        <h1 className=" text-teal-500  font-medium md:text-3xl text-2xl">
          Consult Doctors Online
        </h1>
      </div>
      <div className="flex justify-between ">
        {serviceIcon.map((item) => (
          <div className="flex flex-col  items-center gap-5" key={item.id}>
            <div className="h-36 w-36 bg-custom-gradient text-white flex justify-center items-center text-7xl rounded-full">
              {item.icon}
            </div>
            <span className="text-xl pt-4">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ConsultDoctors;
