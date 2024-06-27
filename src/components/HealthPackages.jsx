import React from "react";
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
    <div className=" py-20">
      <h1>Popular Health Checkup Packages</h1>
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
