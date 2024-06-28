import React from "react";
import { FaStethoscope } from "react-icons/fa";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function HealthPackages() {
  return (
    <div className=" py-20 px-32">
      <div className="flex gap-8 mb-10 items-center ">
        <span className="text-white p-4 text-lg bg-custom-gradient rounded-full">
          <FaStethoscope />
        </span>
        <h1 className=" text-teal-500  font-medium text-3xl ">
          Popular Health Checkup Packages{" "}
        </h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Mn</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default HealthPackages;
