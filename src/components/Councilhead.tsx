"use client";
export default function CounciHeads() {
  return (
    <>
      <section className=" py-12 bg-[url(/bg4.jpg)] bg-cover">
        <h1 className="text-center text-5xl md:text-6xl lg:text-7xl font-bold text-blue-200">Our Secretaries</h1>
        <div className="grid grid-cols-3 gap-2 py-6 max-[1128px]:grid-cols-3 max-[845px]:grid-cols-2 max-[445px]:grid-cols-1 justify-center w-[80%] mx-auto pl-20">
          <div className="flex bg-white flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100   ">
            <img
              src="/President.jpg"
              alt="Prseident Student`s Gymkhana"
              className="w-44 h-44 mx-auto rounded-full dark:bg-gray-500 aspect-square "
            />
            <div className="space-y-4 text-center divide-y divide-gray-700">
              <div className="my-2 space-y-1">
                <h2 className="text-xl font-semibold sm:text-2xl">
                  SANKET PANIGRAHI
                </h2>
                <p className="px-5 text-xs sm:text-base dark:text-gray-400">
                  PRESIDENT <br/> STUDENT`S GYMKHANA
                </p>
              </div>
              <div className="flex justify-center pt-2 space-x-4 align-center">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Linkedin"
                  className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="currentColor"
                    className="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                </a>

                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Email"
                  className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="flex bg-white flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100  ">
            <img
              src="GS Cult.jpg"
              alt="GS Cultural Affairs"
              className="w-44 h-44 mx-auto rounded-full dark:bg-gray-500 aspect-square"
            />
            <div className="space-y-4 text-center divide-y divide-gray-700">
              <div className="my-2 space-y-1">
                <h2 className="text-xl font-semibold sm:text-2xl">
                  SHIVANSH MALPANI
                </h2>
                <p className="px-5 text-xs sm:text-base dark:text-gray-400">
                  GENERAL SECRETARY <br/> CULTURAL AFFAIRS
                </p>
              </div>
              <div className="flex justify-center pt-2 space-x-4 align-center">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Linkedin"
                  className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="currentColor"
                    className="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                </a>

                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Email"
                  className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="flex bg-white flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100 ">
            <img
              src="/GS Acad Ug.png"
              alt="GS Academics UG"
              className="w-44 h-44 mx-auto rounded-full dark:bg-gray-500 aspect-square"
            />
            <div className="space-y-4 text-center divide-y divide-gray-700">
              <div className="my-2 space-y-1">
                <h2 className="text-xl font-semibold sm:text-2xl">
                  B RITHVIK
                </h2>
                <p className="px-5 text-xs sm:text-base dark:text-gray-400">
                  GENERAL SECRETARY <br/> ACADEMIC AFFAIRS UG
                </p>
              </div>
			  <div className="flex justify-center pt-2 space-x-4 align-center">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Linkedin"
                  className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="currentColor"
                    className="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                </a>

                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Email"
                  className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="flex  bg-white flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100 ">
            <img
              src="/Gs Hostel.jpg"
              alt="GS Hostel Affairs"
              className="w-44 h-44 mx-auto rounded-full dark:bg-gray-500 aspect-square"
            />
            <div className="space-y-4 text-center divide-y divide-gray-700">
              <div className="my-2 space-y-1">
                <h2 className="text-xl font-semibold sm:text-2xl">
                  SAURAV SHARMA
                </h2>
                <p className="px-5 text-xs sm:text-base dark:text-gray-400">
                  GENERAL SECRETARY <br/> HOSTEL AFFAIRS
                </p>
              </div>
              <div className="flex justify-center pt-2 space-x-4 align-center">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Linkedin"
                  className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="currentColor"
                    className="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Email"
                  className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="flex bg-white flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100 ">
            <img
              src="/GS MAC.jpg"
              alt="GS MAC"
              className="w-44 h-44 mx-auto rounded-full dark:bg-gray-500 aspect-square"
            />
            <div className="space-y-4 text-center divide-y divide-gray-700">
              <div className="my-2 space-y-1">
                <h2 className="text-xl font-semibold sm:text-2xl">
                  GAURAV RAJPUT
                </h2>
                <p className="px-5 text-xs sm:text-base dark:text-gray-400">
                  GENERAL SECRETARY <br/> MESS, CAFETARIA AND ALLIED SERVICES
                </p>
              </div>
              <div className="flex justify-center pt-2 space-x-4 align-center">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Linkedin"
                  className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="currentColor"
                    className="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Email"
                  className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="flex bg-white flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100 ">
            <img
              src="/GS SnT.JPG"
              alt="GS Science and Technology"
              className="w-44 h-44 mx-auto rounded-full dark:bg-gray-500 aspect-square"
            />
            <div className="space-y-4 text-center divide-y divide-gray-700">
              <div className="my-2 space-y-1">
                <h2 className="text-xl font-semibold sm:text-2xl">
                  SHIVAM SUNDRAM
                </h2>
                <p className="px-5 text-xs sm:text-base dark:text-gray-400">
                  GENERAL SECRETARY <br/> SCIENCE AND TECHNOLGY
                </p>
              </div>
              <div className="flex justify-center pt-2 space-x-4 align-center">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Linkedin"
                  className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="currentColor"
                    className="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Email"
                  className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="flex bg-white flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100 ">
            <img
              src="/GS Acad Pg.jpg"
              alt="GS Academics PG"
              className="w-44 h-44 mx-auto rounded-full dark:bg-gray-500 aspect-square"
            />
            <div className="space-y-4 text-center divide-y divide-gray-700">
              <div className="my-2 space-y-1">
                <h2 className="text-xl font-semibold sm:text-2xl">
                  ADI RAJ
                </h2>
                <p className="px-5 text-xs sm:text-base dark:text-gray-400">
                  GENERAL SECRETARY <br/> ACADEMIC AFFAIRS PG/PHD
                </p>
              </div>
			  <div className="flex justify-center pt-2 space-x-4 align-center">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Linkedin"
                  className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="currentColor"
                    className="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                </a>

                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Email"
                  className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="flex bg-white flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100 ">
            <img
              src="/GS COA.jpg"
              alt="GS COA"
              className="w-44 h-44 mx-auto rounded-full dark:bg-gray-500 aspect-square"
            />
            <div className="space-y-4 text-center divide-y divide-gray-700">
              <div className="my-2 space-y-1">
                <h2 className="text-xl font-semibold sm:text-2xl">
                  K NIKETH REDDY
                </h2>
                <p className="px-5 text-xs sm:text-base dark:text-gray-400">
                  GENERAL SECRETARY <br/> CONSULTING, OUTREACH AND ALUMNI
                </p>
              </div>
              <div className="flex justify-center pt-2 space-x-4 align-center">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Linkedin"
                  className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="currentColor"
                    className="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                </a>

                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Email"
                  className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="flex bg-white flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100 ">
            <img
              src="/GS Sports.jpg"
              alt=" GS Sports Affairs"
              className="w-44 h-44 mx-auto rounded-full dark:bg-gray-500 aspect-square"
            />
            <div className="space-y-4 text-center divide-y divide-gray-700">
              <div className="my-2 space-y-1">
                <h2 className="text-xl font-semibold sm:text-2xl">
                  NIKHLIL ESWARAN
                </h2>
                <p className="px-5 text-xs sm:text-base dark:text-gray-400">
                  GENERAL SECRETARY <br/> SPORTS AFFAIRS
                </p>
              </div>
              <div className="flex justify-center pt-2 space-x-4 align-center">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Linkedin"
                  className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="currentColor"
                    className="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                </a>

                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Email"
                  className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
