import Image from "next/image";
import Link from "next/link";
import { Divider, Button } from "@nextui-org/react";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import "@fontsource/poppins";
function Footer() {
  return (
    <div className="font-poppins flex flex-col w-full text-base px-6 sm:px-12 lg:px-24 bg-white border-t-2 border-black ">
      <div className="flex flex-col xl:flex-row items-center justify-between my-2">
        <div className="flex flex-row items-center gap-6">
          <div>
            <Image
            className="bg-blend-multipy"
              src="/IITI3.jpg"
              width={200}
              height={200}
              alt="Picture of the author"
            />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold w-fit">
            Student's Gymkhana
          </div>
        </div>
        <div className="flex max-sm:flex-col flex-row xl:h-24 max-sm:items-center">
          <div className="mx-2 my-2 xl:my-0 lg:mx-6 xl:mx-12">
            <h1 className="text-2xl sm:text-3xl font-bold text-center">Location</h1>
            <div className="flex flex-row w-full ">
              <span className="inline mr-1 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <p className="w-full xl:w-56 ">
                Indian Institute of Technology Indore, Khandwa Road, Simrol,
                Indore 453552
              </p>
            </div>
          </div>
          <div className="mx-2 my-2 xl:my-0 lg:mx-6 xl:mx-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-center">Contact</h1>
            <div className="flex flex-row w-full">
              <span className="inline mr-1">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6  "
            >
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
              </span>
              <p>studentgym@iiti.ac.in</p>
          </div>
           
           
          </div>
        </div>
      </div>
      <hr className="w-full border-[1px] border-gray-500" />
      
      <div className="xl:grid grid-cols-3 my-4 w-full items-center">
        <p className="xl:text-left text-center col-span-2 pt-1">
          © 2024 IITI. All rights reserved.
        </p>

        <span className="justify-self-end flex flex-row gap-6 w-full justify-center xl:justify-end">
          <a href="https://www.instagram.com/gymkhana_iiti/" target='_blank'> <Instagram sx={{ color: "#374151", fontSize: 40 }} /></a>
          <a href='https://www.facebook.com/studentgym/' target='_blank'><Facebook sx={{ color: "#374151", fontSize: 40 }} /></a>
          <a href="https://www.linkedin.com/company/students-gymkhana-iit-indore/" target='_blank'><LinkedIn sx={{ color: "#374151", fontSize: 40 }} /></a>
        </span>
      </div>
    </div>
  );
}

export default Footer;
