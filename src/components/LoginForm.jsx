import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { MdOutlineClose } from "react-icons/md";
import { Separator } from "./ui/separator";

function LoginForm() {
  const [toggle, setToggle] = useState(false);

  const handleLoginDialog = () => {};
  return (
    <div>
      <Button
        className="py-6 px-4 bg-custom-gradient"
        onClick={() => setToggle(true)}
      >
        Login / SignUp
      </Button>

      {toggle ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 py-5">
          <div className="bg-gray-100 w-4/6 h-full flex rounded-md shadow-lg">
            <div className="w-1/2 h-full">
              <img
                className="w-full h-full object-cover rounded-l-md"
                src="https://www.lifesonmanipal.com/_next/image?url=%2Fimages%2FauthImage.png&w=1920&q=75"
                alt="login"
              />
            </div>
            <div className="w-1/2 p-5 relative ">
              <span
                className="absolute right-5 cursor-pointer text-xl"
                onClick={() => setToggle(false)}
              >
                <MdOutlineClose />
              </span>
              <div className=" p-10 flex flex-col justify-center">
                <h1 className="text-2xl font-medium text-gray-500 mb-4">
                  Sign Up
                </h1>
                <h2 className="text-2xl mb-4">Welcome to Life’s On Manipal.</h2>

                <Separator />
                <div className="my-4 bg-white  p-5">
                  <Label htmlFor="number" className="block mb-2">
                    Enter Mobile Number
                  </Label>
                  <Input
                    id="number"
                    className="w-full border-0 border-b-[1px] shadow-transparent	"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
    // <Dialog>
    //   <DialogTrigger asChild>
    //     <Button className="py-6 px-4 bg-custom-gradient">Login / SignUp</Button>
    //   </DialogTrigger>
    //   <DialogContent
    //     className="p-0 w-1/2 max-w-none
    //    h-full "
    //   >
    //     <div className=" flex p-0">
    //       <div>
    //         <img
    //           className=" w-full object-cover rounded-md "
    //           src="https://www.lifesonmanipal.com/_next/image?url=%2Fimages%2FauthImage.png&w=1920&q=75"
    //           alt="login"
    //         />
    //       </div>
    //       <div className="w-1/2">
    //         <div className="p-10">
    //           <h1>Sign Up</h1>
    //           <h2>Welcome to Life’s On Manipal.</h2>
    //           <div className="p-5 bg-white ">
    //             <Label htmlFor="username" className="text-right">
    //               Enter Mobile Number
    //             </Label>
    //             <Input id="number" />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </DialogContent>
    // </Dialog>
  );
}

export default LoginForm;
