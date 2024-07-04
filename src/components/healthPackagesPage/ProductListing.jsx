"use client";

import React, { useEffect } from "react";
import useHealthPackageStore from "../../store/healthPackageStore";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { LuShoppingCart } from "react-icons/lu";
import Link from "next/link";
import { Button } from "../ui/button";
import packageData from "../../data/healthPackage.json";

function ProductListing() {
  const { location, healthPackages, setHealthPackages, setViewPackage } =
    useHealthPackageStore();

  useEffect(() => {
    if (location) {
      const packages =
        packageData.locations.find((loc) => loc.location === location)
          ?.packages || [];
      setHealthPackages(packages);
    }
  }, [location, setHealthPackages]);

  return (
    <div className="flex flex-col items-center py-10">
      <img
        className=" w-full my-4"
        src="https://www.lifesonmanipal.com/_next/image?url=%2Fimages%2Fhealth-hero2.webp&w=1920&q=75"
        alt="details banner"
      />
      {healthPackages.length > 0 ? (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 w-full">
          {healthPackages.map((pkg, idx) => (
            <Card key={idx}>
              <CardHeader className="p-0">
                <img
                  src="https://www.lifesonmanipal.com/_next/image?url=https%3A%2F%2Fmhcdn.lifesonmanipal.com%2Fhealth_package%2Fadmin%2F378d2d60db8d47ce89f0d2a1f1475787.jpeg&w=1920&q=75"
                  alt="health package"
                />
              </CardHeader>
              <CardContent className="p-8">
                <CardTitle className="mb-8 text-xl font-medium">
                  {pkg.name}
                </CardTitle>
                <p className="pb-3">{pkg.gender}</p>
                <p className="text-blue-700">{location}</p>
              </CardContent>
              <Separator />
              <CardFooter className="flex justify-between items-center py-3">
                <p>Rs. {pkg.price}</p>
                <Link
                  href={`/healthcheckups/${pkg.id}`}
                  onClick={() => setViewPackage(pkg)}
                  className="underline text-blue-600 visited:text-purple-600"
                >
                  <p>View</p>
                </Link>
                <span className=" bg-custom-gradient p-[2px] rounded-lg">
                  <Button className="p-6 bg-white  text-black flex gap-2   ">
                    <span>Add</span> <LuShoppingCart className="text-2xl" />
                  </Button>
                </span>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="flex w-full h-full justify-center items-center">
          <div className="text-2xl font-medium text-center text-gray-600">
            <p>Thank you for your interest in our Health Checkup Packages!</p>
            <p>
              Your health matters, and we appreciate your commitment to
              well-being.
            </p>
            <p>
              Feel free to reach out at call
              <span className="text-blue-700"> 18002025657</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductListing;
