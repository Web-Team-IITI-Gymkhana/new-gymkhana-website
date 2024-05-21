
"use client";
import Link from "next/link";
import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/react";
// import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react"
import MenuIcon from "@mui/icons-material/Menu";

function NavbarComponent() {
  return (
    <div className="grid grid-cols-3 w-full bg-gradient-to-b from-black to-transparent items-center py-4 sticky z-20 top-0">
      <span className="col-start-2 invisible xl:visible w-full flex flex-row gap-2 justify-between">
        <Dropdown className="bg-black rounded-lg outline-none bg-opacity-35">
          <DropdownTrigger>
            <Button className="text-white bg-transparent text-base">
              CLUBS
            </Button>
          </DropdownTrigger>
          <DropdownMenu className="text-white">
            <DropdownItem key="tech" className="text-white">
              <Link href="/club/clubs">
                <Button className="text-base text-white bg-opacity-0 py-2 px-3 hover:underline hover:underline-offset-4 hover:decoration-yellow-300 hover:transition-all">
                  TECHNICAL CLUBS
                </Button>
              </Link>
            </DropdownItem>
            <DropdownItem key="sports">
              <Link href="/sports/clubs">
                <Button className="text-base text-white bg-opacity-0 py-2 px-3 hover:underline hover:underline-offset-4 hover:decoration-yellow-300  hover:transition-all">
                  SPORTS CLUBS
                </Button>
              </Link>
            </DropdownItem><DropdownItem key="cult">
              <Link href="/cult/clubs">
                <Button className="text-base text-white bg-opacity-0 py-2 px-3 hover:underline hover:underline-offset-4 hover:decoration-yellow-300 hover:transition-all">
                  CULTURAL CLUBS
                </Button>
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        {/* <Link href="/club/clubs">
          <Button className="text-base text-white bg-opacity-0">
            CULTURAL CLUBS
          </Button>
        </Link> */}
        <Link href="/">
          <Button className="text-base text-white bg-opacity-0">EVENTS</Button>
        </Link>
        <Link href="/gallery">
          <Button className="text-base text-white bg-opacity">GALLERY</Button>
        </Link>
        <Link href="/">
          <Button className="text-base text-white bg-opacity-0">ABOUT</Button>
        </Link>
        <Link href="/faq">
          <Button className="text-base text-white bg-opacity-0">FAQs</Button>
        </Link>
      </span>
      <span className="justify-self-end">
        
        <Dropdown backdrop="blur">
          <DropdownTrigger>

            <Button className="bg-opacity-0">
              <MenuIcon sx={{ fontSize: 40, color: "white" }} />
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem>
            <Link href="/club/clubs">
                <Button className="text-base text-white bg-opacity-0 py-2 px-3 hover:underline hover:underline-offset-4 hover:decoration-yellow-300 hover:transition-all">
                  TECHNICAL CLUBS
                </Button>
              </Link>
            </DropdownItem>
            <DropdownItem>
            <Link href="/sports/clubs">
                <Button className="text-base text-white bg-opacity-0 py-2 px-3 hover:underline hover:underline-offset-4 hover:decoration-yellow-300  hover:transition-all">
                  SPORTS CLUBS
                </Button>
              </Link>
            </DropdownItem>
            <DropdownItem>
              <p className="text-2xl m-2">Our Secretaries</p>
            </DropdownItem>
            <DropdownItem>
              <p className="text-2xl m-2">Cultural Council</p>
            </DropdownItem>
            <DropdownItem>
              <p className="text-2xl m-2">Technology Council</p>
            </DropdownItem>
            <DropdownItem>
              <p className="text-2xl m-2">Gallery</p>
            </DropdownItem>
            <DropdownItem>
              <p className="text-2xl m-2">Contact Us</p>
            </DropdownItem>
            <Button className="bg-opacity-0 pr-4"><MenuIcon sx={{ fontSize: 40, color:"white"}} /></Button>
            </DropdownMenu>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem><p className="text-xl m-2">About Us</p></DropdownItem>
            <DropdownItem><p className="text-xl m-2">FAQs</p></DropdownItem>
            <DropdownItem><p className="text-xl m-2">Our Secretaries</p></DropdownItem>
            <DropdownItem><p className="text-xl m-2">Cultural Council</p></DropdownItem>
            <DropdownItem><p className="text-xl m-2">Technology Council</p></DropdownItem>
            <DropdownItem><p className="text-xl m-2">Gallery</p></DropdownItem>
            <DropdownItem><p className="text-xl m-2">Contact Us</p></DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </span>
      {/* <span className="invisible xl:visible justify-self-center w-64 flex flex-row gap-2 justify-between">
            <Link href='/'><Button size='sm' className="bg-white text-base">Home</Button></Link>
            <Link href='/'><Button size='sm' className="bg-white text-base">Clubs</Button></Link>
            <Link href='/'><Button size='sm' className="bg-white text-base">Events</Button></Link>
            <Link href='/'><Button size='sm' className="bg-white text-base">About</Button></Link>
        </span> */}
    </div>
  );
}

export default NavbarComponent;
