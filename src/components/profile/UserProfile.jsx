"use client";

import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { FaRegEye } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import { HiOutlinePlus } from "react-icons/hi";
import Link from "next/link";

function UserProfile() {
  const [selectedSec, setSelectedSec] = useState(1);
  return (
    <div className="min-h-screen mt-5">
      <div className="lg:flex-row gap-2 flex-col flex">
        {/* left section */}
        <div className="lg:w-7/12 w-full text-white">
          <div className="bg-custom-gradient w-full rounded-3xl flex flex-col p-8">
            <Link href="/">
              <div className="flex">
                <span className="text-left p-3 border-[1px] border-gray-300 rounded-full text-2xl bg-white bg-opacity-20">
                  <IoIosArrowBack />
                </span>
              </div>
            </Link>
            <div className="justify-center items-center flex flex-col gap-5">
              <h1 className="text-3xl text-white font-bold">Hello World</h1>
              <span className="border-4 border-blue-900 w-44 h-44 rounded-full overflow-hidden">
                <img
                  className=""
                  src="https://www.businessnetworks.com/sites/default/files/default_images/default-avatar.png"
                  alt="avatar"
                />
              </span>
              <div className="flex items-center gap-3 cursor-pointer">
                <FaRegEye />
                <p className="">View Profile</p>
              </div>

              <div className="w-full flex flex-col justify-center gap-3 items-center text-xs">
                <p className="flex items-center gap-3 border-[1px] p-3 w-2/5 rounded-md bg-white bg-opacity-20 border-white">
                  <BsPerson /> <span>PRF.65428</span>
                </p>
                <p className="flex items-center gap-3 border-[1px] p-3 w-2/5 rounded-md bg-white bg-opacity-20 border-white">
                  <MdOutlineMailOutline /> <span>test@gmail.com</span>
                </p>
                <p className="flex items-center gap-3 border-[1px] p-3 w-2/5 rounded-md bg-white bg-opacity-20 border-white">
                  <CiPhone /> <span>987654321</span>
                </p>
              </div>
            </div>
          </div>
          <div className="text-black my-6">
            <h1 className="font-medium text-xl">My Family Members</h1>

            <div className="h-40 p-4 rounded-lg w-32 mt-2 mb-5 bg-white drop-shadow-lg">
              <button className="bg-gray-200 drop-shadow-md text-3xl p-2 my-1 text-white rounded-full border-[0.5px] border-gray-400">
                <HiOutlinePlus />
              </button>
              <p>Add new member</p>
            </div>
          </div>
          <div className="text-black my-6">
            <h1 className="font-medium text-xl">My Addresses</h1>

            <div className="h-40 p-4 rounded-lg w-32 mt-2 mb-5 bg-white drop-shadow-lg">
              <button className="bg-gray-200 drop-shadow-md text-3xl p-2 my-1 text-white rounded-full border-[0.5px] border-gray-400">
                <HiOutlinePlus />
              </button>
              <p>Add new address</p>
            </div>
          </div>

          <div className="text-black">
            <h1>My Uploads</h1>

            <div className="h-56 p-4 rounded-lg w-56 mt-2 mb-5 bg-white drop-shadow-lg flex flex-col items-center justify-center">
              <button className="bg-gray-200 drop-shadow-md text-xl p-2 my-1 text-white rounded-full border-[0.5px] border-gray-400">
                <HiOutlinePlus />
              </button>
              <p className="">Upload new document</p>
              <p> pdf, jpg, png</p>
            </div>
          </div>
        </div>

        {/* right section */}
        <div className="lg:w-5/12 w-full flex flex-col">
          <div className="w-full px-5">
            <h1 className="text-xl mb-2">My Appointments</h1>

            <div className="w-full rounded-2xl bg-white min-h-[200px]">
              <div className="flex">
                <button
                  className={`text-gray-400 p-4 rounded-tl-2xl bg-white border-b-2 border-transparent focus:border-b-2 focus:border-blue-800 active:border-b-2 active:border-blue-800 focus:text-blue-600 active:text-blue-600 ${
                    selectedSec === 1 &&
                    "border-b-2 border-blue-800 text-blue-600"
                  }`}
                  onClick={() => setSelectedSec(1)}
                >
                  Upcoming
                </button>
                <button
                  className={`text-gray-400 p-4 bg-white border-b-2 border-transparent focus:border-b-2 focus:border-blue-800 active:border-b-2 active:border-blue-800 focus:text-blue-600 active:text-blue-600 ${
                    selectedSec === 2 &&
                    "border-b-2 border-blue-800 text-blue-600"
                  }`}
                  onClick={() => setSelectedSec(2)}
                >
                  History
                </button>
              </div>

              {selectedSec === 1 ? (
                <div className="w-full h-96 flex justify-center items-center text-lg text-blue-600">
                  <p>Please book an appointment</p>
                </div>
              ) : (
                <div className="w-full h-96 flex justify-center items-center text-lg text-blue-600">
                  <p>History not available</p>
                </div>
              )}
            </div>

            <div className="flex-1 mt-4">
              <h1 className="text-xl mb-2">My Payments</h1>
              <div className="bg-white rounded-2xl h-full px-10 py-20 flex flex-col items-center justify-center gap-5 text-blue-600">
                <img
                  src="https://www.lifesonmanipal.com/icons/linkUhid.svg"
                  alt="icon"
                />
                <p>Sorry! UHID is not linked</p>
                <p>To view the history of payments please link to your UHID</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;