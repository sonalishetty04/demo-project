"use client";

import React from "react";
import { MdHome } from "react-icons/md";
import { usePathname, useRouter } from "next/navigation";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

function BreadCrumb() {
  const path = usePathname();
  const pathArr = path.split("/").filter((pathName) => pathName);

  return (
    <div className="">
      <Breadcrumb className="p-4 shadow-md rounded-lg bg-white ">
        <BreadcrumbList className="px-10">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              <MdHome className="text-gray-300 text-2xl" />
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />

          {pathArr.map((path, idx) => {
            const href = "/" + pathArr.slice(0, idx + 1).join("/");
            const isLast = idx === pathArr.length - 1;
            return (
              <React.Fragment key={idx}>
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage>{path}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink href={href}>{path}</BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {!isLast && <BreadcrumbSeparator />}
              </React.Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}

export default BreadCrumb;
