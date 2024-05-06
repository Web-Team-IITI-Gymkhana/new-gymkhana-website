import Image from "next/image";
import Link from 'next/link'
import {Divider, Button} from "@nextui-org/react";
import {Facebook, Instagram, LinkedIn} from '@mui/icons-material';
import '@fontsource/poppins';
function Footer() {
  return (
    <div className="font-poppins flex flex-col w-full text-base px-6 sm:px-12 lg:px-24 bg-white">
      <div className="flex flex-col xl:flex-row items-center justify-between mx-4 my-2">
        <div className="flex flex-row items-center gap-6">
          <div>
            <Image
              src="/IITI3.jpg"
              width={200}
              height={200}
              alt="Picture of the author"
            />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold w-fit">Student's Gymkhana</div>
        </div>
        <div className="flex flex-col xl:flex-row xl:h-24">
            <div className="mx-2 my-2 xl:my-0 lg:mx-6 xl:mx-12"><h1 className="text-xl sm:text-2xl font-bold">Location</h1><p className="w-full xl:w-56">Indian Institute of Technology Indore, Khandwa Road, Simrol, Indore 453552</p></div>
            <div className="mx-2 my-2 xl:my-0 lg:mx-6 xl:mx-2"><h1 className="text-xl sm:text-2xl font-bold">Contact</h1><p>studentgym@iiti.ac.in</p></div>
        </div>
      </div>
      
      <Divider className="my-2 bg-slate-600" />
      <div className="xl:grid grid-cols-3 my-4 w-full items-center">
        <p className="xl:text-left text-center">© 2024 IITI. All rights reserved.</p>
        
        <span className="justify-self-end flex flex-row gap-6 w-full justify-center xl:justify-end">
            <Facebook sx={{color: "#374151", fontSize:40}}/>
            <Instagram sx={{color: "#374151", fontSize:40}}/>
            <LinkedIn sx={{color: "#374151", fontSize:40}}/>
        </span>
      </div>
    </div>
  );
}

export default Footer;
