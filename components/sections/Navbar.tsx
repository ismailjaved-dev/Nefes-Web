"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const pathname = usePathname();

  const Data = [
    {
      title: "Services",
      link: "/",
      dropdown: true,
      dropdownFeilds: [
        { title: "Outsourcing", link: "/outsourcing" },
        { title: "Selling", link: "/selling" },
      ],
    },
    { title: "About", link: "/" },
    { title: "Gallery", link: "/gallery" },
  ];

  return pathname.includes("/admin") ? (
    ""
  ) : (
    <section className="  ">
      {pathname !== "/login" && (
        <div className="max-w-fluid w-full p-5">
          <div className="flex justify-between items-center">
            <Image
              src={"/logo.png"}
              alt="logo"
              height={40}
              width={150}
              priority
            />
            <div className="hidden md:flex justify-end gap-10	 items-center">
              <div className="flex gap-10 text-base sm:text-xl">
                {Data.map((res, index) => {
                  return res.dropdown ? (
                    <DropdownMenu key={index}>
                      <DropdownMenuTrigger>{res.title}</DropdownMenuTrigger>
                      <DropdownMenuContent>
                        {res.dropdownFeilds.map((res, key) => {
                          return (
                            <Link key={key} href={res.link}>
                              <DropdownMenuItem className="text-base">
                                {res.title}
                              </DropdownMenuItem>
                            </Link>
                          );
                        })}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Link key={index} href={res.link}>
                      {res.title}
                    </Link>
                  );
                })}
              </div>

              <Button>Book Now</Button>
            </div>
            <div className="block md:hidden h-6 w-6 shrink-0">
              <Sheet>
                <SheetTrigger>
                  <HamburgerMenuIcon className="h-6 w-6 shrink-0" />
                </SheetTrigger>
                <SheetContent className="w-full sm:w-[70%]">
                  <SheetHeader>
                    <SheetDescription className="flex flex-col justify-center items-center gap-4 text-base sm:text-xl mt-10">
                      {Data.map((res, index) => {
                        return res.dropdown ? (
                          <DropdownMenu key={index}>
                            <DropdownMenuTrigger className="border-b border-gray-200 w-full">
                              <h3 className="text-2xl text-black-200">
                                {res.title}
                              </h3>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                              {res.dropdownFeilds.map((res, key) => {
                                return (
                                  <Link key={key} href={res.link}>
                                    <DropdownMenuItem className="text-base">
                                      {res.title}
                                    </DropdownMenuItem>
                                  </Link>
                                );
                              })}
                            </DropdownMenuContent>
                          </DropdownMenu>
                        ) : (
                          <Link
                            key={index}
                            href={res.link}
                            className="border-b border-gray-200 w-full text-center"
                          >
                            <h3 className="text-2xl text-black-200 ">
                              {res.title}
                            </h3>
                          </Link>
                        );
                      })}
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Navbar;
