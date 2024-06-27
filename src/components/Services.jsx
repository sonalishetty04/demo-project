import React from "react";
import { Button } from "./ui/button";
import { FaStethoscope } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { PiSyringe } from "react-icons/pi";

function Services() {
  const serviceList = [
    {
      id: 1,
      icon: <FaStethoscope />,
      title: "Health Checkup",
      subtitle: "Find a suitable package",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      id: 2,
      icon: <FaUserDoctor />,
      title: "Doctor Consultation ",
      subtitle: "Easily Book an Appointment",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      id: 3,
      icon: <PiSyringe />,
      title: "Vaccination Package",
      subtitle: "Find a suitable package",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
  ];
  return (
    <div className=" p-20">
      <div className="mb-20">
        <h1 className="text-5xl text-blue-800 mb-10">
          Health Care, from the comfort of your home
        </h1>
        <div className=" bg-custom-gradient rounded-2xl text-white flex justify-between p-10 ">
          <div>
            <h2 className="text-4xl">
              Dont Delay care For you and those you love
            </h2>
            <p className="text-2xl my-5">Consult doctors online</p>

            <Button className="bg-white text-blue-800 py-6 px-4">
              Book an Appointment
            </Button>
          </div>

          <div className=" rounded-full overflow-hidden ">
            <img
              className="object-fit "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvRlgVnk-wW82_Cxt1SzckD5VC2xJ2LI_czg&s"
              alt="stethoscope"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="flex gap-8 mb-10  ">
          <span className="text-white p-3 bg-custom-gradient rounded-full">
            <FaStethoscope />
          </span>
          <h1 className=" text-teal-400 text-3xl ">Our Services</h1>
        </div>

        <div className="flex  gap-5">
          {serviceList.map((item) => (
            <div
              className="flex items-center border-2 rounded-md border-blue-800  gap-4 p-5"
              key={item.id}
            >
              <span className=" p-6 text-xl  text-white flex  rounded-md bg-custom-gradient">
                {item.icon}
              </span>

              <div>
                <h1 className="text-2xl text-blue-800">{item.title}</h1>
                <p className="text-xs text-gray-400 my-2">{item.subtitle}</p>
                <p> {item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
