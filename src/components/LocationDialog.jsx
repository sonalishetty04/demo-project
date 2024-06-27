import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import locations from "@/data/city";

function LocationDialog() {
  return (
    <div className="flex justify-between items-center w-2/3 border py-2 px-4 rounded-md border-teal-500 ">
      <div className="flex items-center">
        <span className="text-3xl text-gradient">
          <MdOutlineLocationOn />
        </span>
        <span className="texat-blue-800 text-sm pl-2">{city}</span>
      </div>

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
  );
}

export default LocationDialog;
