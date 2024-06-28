import React from "react";
import { Button } from "./ui/button";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { BiSolidDownArrow } from "react-icons/bi";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function NavigationMenu() {
  return (
    <div className="bg-custom-gradient py-4 px-6 hidden md:block text-white">
      <div className="flex justify-end items-center gap-6 text-sm">
        <p>Vaccination Packages</p>
        <p>Health Checkup Packages</p>
        <p>Doctor Appointment</p>
        <Button className="bg-white text-blue-800 py-5 px-3 gap-2 w-36">
          <FaPhoneAlt />
          Support
        </Button>
        <div className="bg-blue-800  py-1 px-4 gap-2 rounded-md flex items-center">
          <HiOutlineVideoCamera className="text-xl" />
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Video Consultation" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">Primary Consultation</SelectItem>
                <SelectItem value="apple">Specialist Consultation</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}

export default NavigationMenu;
