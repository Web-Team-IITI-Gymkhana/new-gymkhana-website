"use client";

import Link from "next/link";
import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import MenuIcon from "@mui/icons-material/Menu";

function NavbarComponent() {
  return (
    <div className="grid grid-cols-3 w-full bg-gradient-to-b from-black to-transparent items-center py-4 sticky z-20 top-0">
      <span className="col-start-2 hidden xl:flex w-full flex-row gap-2 justify-between">
        <Link href="/">
          <Button className="text-2xl text-white bg-opacity-0">HOME</Button>
        </Link>

        <Dropdown className="bg-black bg-opacity-35 text-2xl">
          <DropdownTrigger>
            <Button className="text-2xl text-white bg-opacity-0">CLUBS</Button>
          </DropdownTrigger>
          <DropdownMenu className="text-white">
            <DropdownItem key="tech">
              <Link href="/club/clubs">
                <Button className="text-base text-white bg-opacity-0 hover:text-black hover:transition-all">
                  TECHNICAL CLUBS
                </Button>
              </Link>
            </DropdownItem>
            <DropdownItem key="sports">
              <Link href="/sports/clubs">
                <Button className="text-base text-white bg-opacity-0 hover:text-black hover:transition-all">
                  SPORTS CLUBS
                </Button>
              </Link>
            </DropdownItem>
            <DropdownItem key="cult">
              <Link href="/cult/clubs">
                <Button className="text-base text-white bg-opacity-0 hover:text-black hover:transition-all">
                  CULTURAL CLUBS
                </Button>
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Link href="/gallery">
          <Button className="text-2xl text-white bg-opacity-0">EVENTS</Button>
        </Link>
        <Link href="/faq">
          <Button className="text-2xl text-white bg-opacity-0">FAQs</Button>
        </Link>
      </span>
    </div>
  );
}

export default NavbarComponent;
