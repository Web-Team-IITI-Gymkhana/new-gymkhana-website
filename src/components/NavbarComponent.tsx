"use client";

import Link from "next/link";
import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";


function NavbarComponent() {
  // 0a0d06 
  return (
    <div className=" items-center bg-gradient-to-r from-black via-[#0a0d06] to-black  py-4 sticky z-20 top-0 w-full">
      <span className=" flex flex-row lg:w-[50%] mx-auto justify-center ">
        <Link href="/">
          <Button className="text-2xl  max-sm:text-lg  text-white font-semibold bg-opacity-0 px-6 max-sm:px-4">HOME</Button>
        </Link>

        <Dropdown className="bg-black bg-opacity-35 text-2xl">
          <DropdownTrigger>
            <Button className="text-2xl   max-sm:text-lg  text-white font-semibold bg-opacity-0 px-6 max-sm:px-4">CLUBS</Button>
          </DropdownTrigger>
          <DropdownMenu className="text-white">
            <DropdownItem key="tech">
              <Link href="/club/clubs">
                <Button className="text-base text-white bg-opacity-0 py-2 px-3 hover:underline hover:underline-offset-4 hover:decoration-yellow-300 hover:transition-all">
                  TECHNICAL CLUBS
                </Button>
              </Link>
            </DropdownItem>
            <DropdownItem key="cult">
              <Link href="/cult/clubs">
                <Button className="text-base text-white bg-opacity-0 py-2 px-3 hover:underline hover:underline-offset-4 hover:decoration-yellow-300 hover:transition-all">
                  CULTURAL CLUBS
                </Button>
              </Link>
            </DropdownItem>
            <DropdownItem key="sports">
              <Link href="/sports/clubs">
                <Button className="text-base text-white bg-opacity-0 py-2 px-3 hover:underline hover:underline-offset-4 hover:decoration-yellow-300  hover:transition-all">
                  SPORTS CLUBS
                </Button>
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Link href="/eventsgallery">
          <Button className="text-2xl  max-sm:text-lg text-white font-semibold bg-opacity-0 px-6 max-sm:px-4">EVENTS</Button>
        </Link>
        <Link href="/faq">
          <Button className="text-2xl  max-sm:text-lg  text-white font-semibold bg-opacity-0 px-6 max-sm:px-4 ">FAQs</Button>
        </Link>
      </span>
    </div>
  );
}

export default NavbarComponent;
