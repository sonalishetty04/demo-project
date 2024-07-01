"use client";

import useHealthPackageStore from "@/store/healthPackageStore";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { LuShoppingCart } from "react-icons/lu";
import { RiErrorWarningLine } from "react-icons/ri";

function ProductDetails() {
  const { viewPackage, location } = useHealthPackageStore();
  const [selectedSec, setSelectedSec] = useState(1);

  console.log(viewPackage);
  return (
    <div className=" h-full w-full px-24 py-10 ">
      {viewPackage !== null ? (
        <div className=" h-full w-full flex p-6  gap-10 bg-white rounded-xl">
          {/* left section */}
          <div className="w-1/2">
            <img
              className="rounded-2xl"
              src="https://www.lifesonmanipal.com/_next/image?url=https%3A%2F%2Fmhcdn.lifesonmanipal.com%2Fhealth_package%2Fadmin%2F378d2d60db8d47ce89f0d2a1f1475787.jpeg&w=1920&q=75"
              alt="Health Package"
            />

            {/*left-bottom section */}

            <div className="text-sm  ">
              <div className="flex  mt-2">
                <button
                  className=" text-sm font-semibold p-2 bg-white text-black border-b-2 border-transparent focus:border-b-2 focus:border-blue-800 active:border-b-2 active:border-blue-800 hover:bg-gray-100"
                  onClick={() => setSelectedSec(1)}
                >
                  Tests Included
                </button>
                <button
                  className=" text-sm font-semibold p-2 bg-white text-black border-b-2 border-transparent focus:border-b-2 focus:border-blue-800 active:border-b-2 active:border-blue-800 hover:bg-gray-100 "
                  onClick={() => setSelectedSec(2)}
                >
                  <h1> Benefits</h1>
                </button>
              </div>
              <div>
                {selectedSec === 1 ? (
                  <ul className="px-10 py-3 list-disc">
                    {viewPackage.tests_included.map((test, idx) => (
                      <li key={idx}>{test}</li>
                    ))}
                  </ul>
                ) : (
                  <ul className="px-10 py-3 list-disc">
                    {viewPackage.benefits.map((benefit, idx) => (
                      <li key={idx}>{benefit}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          {/* right section */}
          <div className="w-1/2">
            {/* right top section */}
            <div>
              <div className="flex flex-col gap-5">
                <div className="rounded-lg flex p-4 justify-between items-center w-full   shadow-md">
                  <p>Rs. {viewPackage.price}</p>
                  <span className=" bg-custom-gradient p-[2px] rounded-lg">
                    <Button className="p-6 bg-white  text-black flex gap-2   ">
                      <span>Add</span> <LuShoppingCart className="text-2xl" />
                    </Button>
                  </span>
                </div>
                <div className="rounded-lg flex p-4 justify-between items-center w-full  shadow-md">
                  <p className="text-blue-800">{location}</p>
                  <Button className="bg-custom-gradient p-6 ">Book Now</Button>
                </div>
              </div>

              <div className="text-sm text-gray-600 border-t-[1px] my-5 py-3">
                <p>{viewPackage.description}</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>

            {/* right-bottom section - Important Instructions*/}

            <div>
              <div className=" rounded-2xl bg-red-50 p-5">
                <div className="text-red-700  flex items-center gap-5 text-lg pb-4 border-b-[1px]">
                  <RiErrorWarningLine />
                  <h1>Important Instructions</h1>
                </div>
                <div className="text-sm">
                  <p className=" text-gray-500  mt-2">
                    Please read the following very carefully
                  </p>

                  <p className=" p-10 ">{viewPackage.instructions}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>Please select your location and the package</h1>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
