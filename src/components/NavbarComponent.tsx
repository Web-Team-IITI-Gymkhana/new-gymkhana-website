import Link from "next/link";
import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/react";
import MenuIcon from "@mui/icons-material/Menu";

function NavbarComponent() {
  return (
    <div className="grid grid-cols-3 w-full bg-gradient-to-b from-black to-transparent items-center py-4 sticky top-0 z-10 ">
      <span className="col-start-2 invisible xl:visible w-full flex flex-row gap-2 justify-between">
        <Link href="/">
          <Button className="text-base text-white bg-opacity-0">CLUBS</Button>
        </Link>
        <Link href="/">
          <Button className="text-base text-white bg-opacity-0">EVENTS</Button>
        </Link>
        <Link href="/gallery">
          <Button className="text-base text-white bg-opacity">GALLERY</Button>
        </Link>
        <Link href="/">
          <Button className="text-base text-white bg-opacity-0">ABOUT</Button>
        </Link>
        <Link href="/">
          <Button className="text-base text-white bg-opacity-0">FAQs</Button>
        </Link>
      </span>
      <span className="justify-self-end">
        <Dropdown backdrop="blur">
          <DropdownTrigger>
            <Button className="bg-opacity-0"><MenuIcon sx={{ fontSize: 40, color:"white"}} /></Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem><p className="text-2xl m-2">About Us</p></DropdownItem>
            <DropdownItem><p className="text-2xl m-2">FAQs</p></DropdownItem>
            <DropdownItem><p className="text-2xl m-2">Our Secretaries</p></DropdownItem>
            <DropdownItem><p className="text-2xl m-2">Cultural Council</p></DropdownItem>
            <DropdownItem><p className="text-2xl m-2">Technology Council</p></DropdownItem>
            <DropdownItem><p className="text-2xl m-2">Gallery</p></DropdownItem>
            <DropdownItem><p className="text-2xl m-2">Contact Us</p></DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </span>
    </div>
  );
}

export default NavbarComponent;
