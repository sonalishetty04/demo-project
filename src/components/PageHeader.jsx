"use client";

import React, { useState } from "react";
import locations from "@/data/city";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoVideocamOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import NavigationMenu from "./NavigationMenu";
import LoginForm from "./LoginForm";
import Link from "next/link";
import useHealthPackageStore from ".././store/healthPackageStore";

function PageHeader() {
  const { setLocation } = useHealthPackageStore();
  const [city, setCity] = useState("Bengaluru - Old Airport Road");

  const handleOnClick = (e) => {
    const input = e.target.innerText;
    const selectedCity = input.split(" - ")[0];
    setCity(input);
    setLocation(selectedCity);
  };

  return (
    <div className="w-full sticky top-0 z-50 bg-white shadow-md">
      <div className="flex items-center justify-between px-4 p-1 ">
        <Link href={"/"}>
          <img
            className="h-12 w-20 md:h-20 md:w-36"
            src="https://www.lifesonmanipal.com/logo.svg"
            alt="logo"
          />
        </Link>
        <div className="rounded-b-md p-2 hidden justify-between items-center md:flex w-1/2 ">
          <Dialog>
            <DialogTrigger asChild>
              <div className="flex justify-between items-center w-2/3 border py-2 px-4 rounded-md border-teal-500 cursor-pointer">
                <div className="flex items-center">
                  <span className="text-3xl">
                    <MdOutlineLocationOn />
                  </span>
                  <span className="text-blue-800 text-sm pl-2">{city}</span>
                </div>
                <IoMdArrowDropdown className="cursor-pointer" />
              </div>
            </DialogTrigger>
            <DialogContent className="h-full w-full rounded-xl px-4 overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl">
                  Your Preferred Location
                </DialogTitle>
                <DialogDescription>
                  {locations.map((branch, idx) => (
                    <div key={idx}>
                      <DialogTrigger asChild>
                        <p
                          className="border-b-[1px] text-base py-2 w-full hover:text-teal-500 cursor-pointer"
                          onClick={handleOnClick}
                        >
                          {branch.location
                            ? `${branch.city} - ${branch.location}`
                            : branch.city}
                        </p>
                      </DialogTrigger>
                    </div>
                  ))}
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          <LoginForm />
        </div>
        <div className="flex justify-between w-1/5 items-center md:hidden">
          <span className="rounded-full bg-blue-900 text-white p-2 text-sm ">
            <FaPhoneAlt />
          </span>
          <img
            className="h-6 w-6"
            src="https://w7.pngwing.com/pngs/567/818/png-transparent-india-website-cartoon-social-media-4-months-old-s-hand-orange-presentation-thumbnail.png"
            alt="logo"
          />
        </div>
      </div>
      <div className="w-full rounded-b-md shadow-md p-2 flex justify-between items-center md:hidden">
        <div className="flex justify-between items-center">
          <span className="text-3xl">
            <MdOutlineLocationOn />
          </span>
          <span className="text-teal-500">{city}</span>
          <Dialog>
            <DialogTrigger>
              <IoMdArrowDropdown />
            </DialogTrigger>
            <DialogContent className="h-full w-full rounded-xl px-4 overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl">
                  Your Preferred Location
                </DialogTitle>
                <DialogDescription>
                  {locations.map((branch, idx) => (
                    <div key={idx}>
                      <DialogTrigger asChild>
                        <p
                          className="border-b-[1px] text-base py-2 w-full hover:text-teal-500"
                          onClick={handleOnClick}
                        >
                          {branch.location
                            ? `${branch.city} - ${branch.location}`
                            : branch.city}
                        </p>
                      </DialogTrigger>
                    </div>
                  ))}
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
        <span className="rounded-full bg-custom-gradient text-white p-1 text-sm ">
          <IoVideocamOutline />
        </span>
      </div>
      <NavigationMenu />
    </div>
  );
}

export default PageHeader;
