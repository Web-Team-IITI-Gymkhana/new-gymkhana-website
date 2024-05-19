"use client";
import React from "react";
import Image from "next/image";
import { Carousel } from "@material-tailwind/react";

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
    <div className="fixed inset-0 flex justify-center items-center z-50 backdrop-brightness-50">
      <div className="h-[80vh] w-[60vw] mx-4 min-h-[200px] min-w-[300px] sm:min-h-[300px] sm:min-w-[400px]">
        <div className="bg-white h-full w-full px-4 pb-4">
          <div className="flex flex-row justify-between items-center py-3">
            <span className="text-lg font-semibold text-gray-600">{event.name}</span>
            <button
              className="bg-gray-600 bg-opacity-50 py-1 px-2.5 hover:bg-red-400 hover:bg-opacity-70 transition-all rounded-full text-xl text-white font-bold"
              onClick={onClose}
            >
              &#10005;
            </button>
          </div>
          <div className="relative h-full overflow-hidden">
            <Carousel className="rounded-xl"  placeholder={event.name}>
              {event.gallery.map((image, index) => (
                <div
                  key={index}
                  className={`flex justify-center items-center ${index === imageIndex ? "block" : "hidden"}`}
                >
                  <Image
                    src={event.gallery[index]}
                    alt={event.name}
                    width={500}
                    height={500}
                    style={{ objectFit: "contain" }}
                    className="w-full "
                  />
                </div>
              ))}
            </Carousel>
            <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-4">
              <button
                className="bg-gray-600 bg-opacity-50 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full"
                onClick={onPrevImage}
              >
                ❮
              </button>
              <button
                className="bg-gray-600 bg-opacity-50 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full"
                onClick={onNextImage}
              >
                ❯
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
