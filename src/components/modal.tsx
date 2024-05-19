"use client"
import React from "react";
import Image from "next/image";
import { Carousel } from "flowbite-react";

interface ModalProps {
  event: EventObject;
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
    <div className="fixed inset-0 flex justify-center items-center z-50 backdrop-brightness-50">
      <div className="h-[60vh] w-[50vw] mx-4 min-h-[200px] min-w-[300px] min-[350px]:min-h-[200px] min-[350px]:min-w-[300px] min-[460px]:min-h-[300px] min-[460px]:min-w-[400px]">
        <div className="bg-white max-[900px]:h-[40vh] h-[60vh] w-[50vw] px-4 pb-4 min-h-[200px] min-w-[300px] min-[350px]:min-h-[200px] min-[350px]:min-w-[300px] min-[460px]:min-h-[300px] min-[460px]:min-w-[400px]">
          <div className="flex flex-row justify-between text-center items-center py-3">
            <span className="text-lg font-semibold text-gray-600">{event.name}</span>
            <button
              className="bg-gray-600 bg-opacity-50 py-1 px-2.5 hover:bg-red-400 hover:bg-opacity-70 transition-all rounded-full text-xl text-white font-bold"
              onClick={onClose}
            >
              &#10005;
            </button>
          </div>
    <div className="relative h-80 overflow-hidden top-44">
      <Carousel>
      <Image
                src={event.gallery[imageIndex]}
                alt={event.name}
                width={500}
                height={500}
                objectFit="contain"
                className="w-full"
              />
      </Carousel>
    </div>          

        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
