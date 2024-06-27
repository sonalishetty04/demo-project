import React from "react";
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

function LoginForm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="py-6 px-4 bg-custom-gradient">Login / SignUp</Button>
      </DialogTrigger>
      <DialogContent
        className="p-0 w-1/2 max-w-none
       h-full "
      >
        <div className=" flex p-0">
          <div>
            <img
              className=" w-full object-cover rounded-md "
              src="https://www.lifesonmanipal.com/_next/image?url=%2Fimages%2FauthImage.png&w=1920&q=75"
              alt="login"
            />
          </div>
          <div className="w-1/2">
            <div className="p-10">
              <h1>Sign Up</h1>
              <h2>Welcome to Life’s On Manipal.</h2>
              <div className="p-5 bg-white ">
                <Label htmlFor="username" className="text-right">
                  Enter Mobile Number
                </Label>
                <Input id="number" />
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default LoginForm;
