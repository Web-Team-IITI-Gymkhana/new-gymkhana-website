"use client";
import React from "react";
import Image from "next/image";
import { Carousel, IconButton } from "@material-tailwind/react";

interface ModalProps {
  event: {
    name: string;
    gallery: string[];
  };
  imageIndex: number;
  onClose: () => void;
  onNextImage: () => void;
  onPrevImage: () => void;
}

const ModalComponent: React.FC<ModalProps> = ({
  event,
  imageIndex,
  onClose,
  onNextImage,
  onPrevImage,
}) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 backdrop-brightness-[0.3] pt-8 ">
      <div className="h-[75vh] w-[90vw]  lg:w-[90vw] lg:h-[70vh] xl:w-[70vw] xl:h-[90vh] mx-4 min-h-[200px] min-w-[300px] sm:min-h-[300px] sm:min-w-[400px] ">
        <div className="bg-white h-full w-full px-4 pb-4 rounded-lg shadow-2xl">
          <div className="flex flex-row justify-between items-center py-3">
            <span className="text-xl font-semibold text-gray-600">{event.name}</span>
            <button
              className="bg-gray-600 bg-opacity-50 py-1 px-2.5 hover:bg-red-400 hover:bg-opacity-70 transition-all rounded-full text-xl text-white font-bold"
              onClick={onClose}
            >
              &#10005;
            </button>
          </div>
          <div className="relative h-[90%] overflow-hidden">
            <Carousel
            placeholder={''}
              className="rounded-xl overflow-hidden"
              prevArrow={({ handlePrev }) => (
                <IconButton
                placeholder={''}
                  variant="text"
              
                  onClick={onPrevImage}
                  className="!absolute top-2/4 left-4 -translate-y-2/4 text-white sm:text-gray-400 "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-8 w-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                    />
                  </svg>
                </IconButton>
              )}
              nextArrow={({ handleNext }) => (
                <IconButton
                placeholder={''}
                  variant="text"                 
                 
                  onClick={onNextImage}
                  className="!absolute top-2/4 !right-4 -translate-y-2/4 text-white sm:text-gray-400 "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-8 w-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </IconButton>
              )}
            >
              <img
                src={event.gallery[imageIndex]}
                alt={event.name}
                className=" mx-auto  h-full object-contain"
              />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
