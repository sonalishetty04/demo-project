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
      subtitle: "Years of experience",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      id: 2,
      icon: <FaUserDoctor />,
      title: "Doctor Consultation ",
      subtitle: "Doctors",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      id: 3,
      icon: <PiSyringe />,
      title: "Vaccination Package",
      subtitle: "Serving cities",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
  ];
  return (
    <div className=" lg:px-28 py-10 px-6">
      <div className="mb-20 hidden md:block ">
        <h1 className="text-4xl text-blue-800 mb-5 font-medium">
          Health Care, from the comfort of your home
        </h1>
        <div className=" bg-custom-gradient rounded-3xl text-white flex justify-between items-center lg:px-10 lg:py-8 p-5 ">
          <div>
            <h2 className="text-2xl xl:text-3xl  font-medium">
              Dont Delay care For you and those you love
            </h2>
            <p className="text-lg lg:text-xl my-2 lg:my-3 font-medium">
              Consult doctors online
            </p>

            <Button className="bg-white text-blue-800 py-6 px-4 mt-2">
              Book an Appointment
            </Button>
          </div>

          <span className=" lg:h-48 lg:w-48  h-36 w-36  rounded-full overflow-hidden bg-white border-2 border-white mr-8">
            <img
              className="object-cover w-full h-full "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhqjrbbgUJUjqwntYzqm3VWPYjrTuHPqHMZw&s"
              alt="stethoscope"
            />
          </span>
        </div>
      </div>

      <div>
        <div className="flex gap-8 mb-10 items-center ">
          <span className="text-white p-4 text-lg bg-custom-gradient rounded-full hidden md:block">
            <FaStethoscope />
          </span>
          <h1 className=" text-teal-500  font-medium md:text-3xl text-2xl">
            Our Services
          </h1>
        </div>

        <div className="flex  gap-5">
          {serviceList.map((item) => (
            <div
              className="bg-custom-gradient p-[1px] rounded-md"
              key={item.id}
            >
              <div
                className="flex items-center  bg-white  gap-4 p-5 rounded-md h-full w-full"
                key={item.id}
              >
                <span className=" p-6 text-xl  text-white flex  rounded-md bg-custom-gradient">
                  {item.icon}
                </span>

                <div>
                  <h1 className="text-2xl text-blue-800">{item.title}</h1>
                  <p className="text-xs text-gray-400 my-2">{item.subtitle}</p>
                  <p className="text-sm"> {item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
