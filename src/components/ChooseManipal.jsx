import React from "react";
import { TbClockHour8Filled } from "react-icons/tb";
import { FaPeopleGroup } from "react-icons/fa6";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import { FaHospital } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";
import { FaHeartbeat } from "react-icons/fa";

function ChooseManipal() {
  const experienceList = [
    {
      id: 1,
      icon: <TbClockHour8Filled />,
      title: "68",
      subtitle: "Years of experience",
    },
    {
      id: 2,
      icon: <FaPeopleGroup />,
      title: "5000",
      subtitle: "Doctors",
    },
    {
      id: 3,
      icon: <BsGlobeCentralSouthAsia />,
      title: "17",
      subtitle: "Serving cities",
    },
    {
      id: 4,
      icon: <FaHospital />,
      title: "9500",
      subtitle: "Beds",
    },
    {
      id: 5,
      icon: <FaBuildingColumns />,
      title: "33",
      subtitle: "Hospitals",
    },
    {
      id: 6,
      icon: <FaHeartbeat />,
      title: "45",
      subtitle: "Millions lives Touched",
    },
  ];
  return (
    <div className="relative w-full h-96 md:h-[700px] text-white  ">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.lifesonmanipal.com/_next/image?url=%2Fimages%2FhomepageChooseManipalBg.webp&w=1920&q=75')",
        }}
      ></div>

      <div className="bg-custom-gradient absolute  top-[25%] right-auto left-auto mx-10 text-center p-10 rounded-2xl">
        <h1 className="text-4xl">Choose Manipal</h1>
        <h1 className="text-4xl  my-5">Choose a world of good health</h1>
        <p className=" text-xl">
          From starting out as a vision of one man's dream to the reality of
          revolutionizing the health care industry, we are proud to be the flag
          bearers of this paradigm shift with our clinical excellence, patient
          centricity and ethical practices integral to healthcare.
        </p>

        <div className="flex justify-center gap-8 my-10 ">
          {experienceList.map((item) => (
            <div key={item.id} className="flex items-center gap-2">
              <span className="w-12 h-12 rounded-full bg-white text-blue-800 flex justify-center items-center text-2xl">
                {item.icon}
              </span>
              <div className=" text-left">
                <h1 className="text-2xl font-semibold">{item.title}</h1>
                <p>{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChooseManipal;
