"use client";

import React, { useState } from "react";
import { MdPersonOutline } from "react-icons/md";
import { LuShoppingCart } from "react-icons/lu";
import { FiLogOut } from "react-icons/fi";
import { Separator } from "./ui/separator";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useRouter } from "next/navigation";
import useAuthStore from "@/store/userAuthStore";
import Link from "next/link";

function LogoutMenuItem({ setShowProfileForm }) {
  const { logOut, firstName } = useAuthStore();
  const router = useRouter();

  const [dropDown, setDropDown] = useState(false);

  const handleLogout = async () => {
    await logOut();
    router.push("/");
    setDropDown(false);
    setShowProfileForm(false);
  };

  const handleUserNameClick = () => {
    router.push("/profile");
    setDropDown(false);
  };

  return (
    <div className="flex items-center gap-3  ">
      <div className="min-w-24 m-w-max ">
        <div className="font-medium m ">
          <span className="mr-1">Hello,</span>
          <span>{firstName}</span>
        </div>

        <span className="text-xs ">{"Hope you're well"}</span>
      </div>
      <div className="flex cursor-pointer">
        <span
          className=" bg-gray-100 text-blue-800 text-2xl rounded-full p-3 "
          onClick={() => setDropDown(!dropDown)}
        >
          <MdPersonOutline />
        </span>

        {dropDown ? (
          <div className="absolute text-blue-800 bg-white  rounded-lg cursor-pointer  top-20  shadow-2xl min-w-max right-10">
            <div
              className="font-medium flex items-center gap-3 p-3"
              onClick={handleUserNameClick}
            >
              <MdPersonOutline className="text-xl" /> <span>UserName</span>
            </div>
            <Separator />

            <AlertDialog>
              <AlertDialogTrigger>
                <div className="font-medium flex items-center gap-3 p-3  ">
                  <FiLogOut className="text-xl" />
                  <span className="hover:text-blue-600 font-semibold">
                    Logout
                  </span>
                </div>
              </AlertDialogTrigger>
              <AlertDialogContent className="flex flex-col items-center justify-center py-10">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Are you sure you want to Logout ?
                  </AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className="p-6 border-blue-800">
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction
                    className="bg-custom-gradient p-6"
                    onClick={handleLogout}
                  >
                    Logout
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        ) : null}
      </div>

      <Link href="/cart" className="flex">
        <span className=" bg-gray-100 text-blue-800 text-2xl rounded-full p-3 ">
          <LuShoppingCart />
        </span>
      </Link>
    </div>
  );
}

export default LogoutMenuItem;
