"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ModalComponent from "../../components/modal";

interface EventObject {
  name: string;
  src: string;
  alt: string;
  gallery: string[]; // Array of image sources for the event gallery
}

export default function ImageGallery() {
  const [selectedEvent, setSelectedEvent] = useState<EventObject | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [events, setEvents] = useState<EventObject[]>([]);

  useEffect(() => {
    // Initialize event data
    setEvents([
      {
        name: "Fluxus",
        src: "/fluxus.jpg",
        alt: "Fluxus Event",
        gallery: [ // Array of Fluxus event images
        "/assests/fluxus/fluxus1.jpg",
        "/assests/fluxus/fluxus2.jpg",
        "/assests/fluxus/fluxus3.jpg",
        "/assests/fluxus/fluxus4.jpg",
        "/assests/fluxus/fluxus5.jpg",
        "/assests/fluxus/fluxus6.jpg",
        "/assests/fluxus/fluxus7.jpg",
        "/assests/fluxus/fluxus8.jpg",
        "/assests/fluxus/fluxus9.jpg",
        "/assests/fluxus/fluxus10.jpg",
        "/assests/fluxus/fluxus11.jpg",
      
          // Add more Fluxus event images here...
        ],
      },

      {
        name: "Republic Day",
        src: "/assests/republic.jpg",
        alt: "Republic Event",
        gallery: [ // Array of Fluxus event images
          "/assests/republic/republic1.jpg",
          "/assests/republic/republic2.jpg",
          "/assests/republic/republic3.jpg",
          "/assests/republic/republic4.jpg",
          "/assests/republic/republic5.jpg",
          "/assests/republic/republic6.jpg",
          "/assests/republic/republic7.jpg",
          "/assests/republic/republic8.jpg",
          "/assests/republic/republic9.jpg",
          "/assests/republic/republic10.jpg",
          "/assests/republic/republic11.jpg",
          "/assests/republic/republic12.jpg",
          "/assests/republic/republic13.jpg",
          "/assests/republic/republic14.jpg",
          "/assests/republic/republic15.jpg",

          // Add more Fluxus event images here...
        ],
      },

      {
        name: "Convocation",
        src: "/assests/convocation.jpg",
        alt: "convocation",
        gallery: [ // Array of Fluxus event images
          "/assests/convocation/convocation1.jpg",
          "/assests/convocation/convocation2.jpg",
          "/assests/convocation/convocation3.jpg",
          "/assests/convocation/convocation4.jpg",
          "/assests/convocation/convocation5.jpg",
          "/assests/convocation/convocation6.jpg",
          "/assests/convocation/convocation7.jpg",
          "/assests/convocation/convocation8.jpg",
          "/assests/convocation/convocation9.jpg",
          "/assests/convocation/convocation10.jpg",
          // Add more Fluxus event images here...
        ],
      },

      {
        name: "E-summit",
        src: "/assests/esummit.jpg",
        alt: "esummit Event",
        gallery: [ // Array of Fluxus event images
          "/assests/esummit/e1.jpg",
          "/assests/esummit/e2.jpg",
          "/assests/esummit/e3.jpg",
          "/assests/esummit/e4.jpg",
          "/assests/esummit/e5.jpg",
          "/assests/esummit/e6.jpg",
          "/assests/esummit/e7.jpg",
          "/assests/esummit/e8.jpg",
          "/assests/esummit/e9.jpg",
          "/assests/esummit/e10.jpg",
          "/assests/esummit/e11.jpg",
          "/assests/esummit/e12.jpg",
          "/assests/esummit/e13.jpg",
          "/assests/esummit/e14.jpg",
          "/assests/esummit/e15.jpg",
          // Add more Fluxus event images here...
        ],
      },

      {
        name: "IITI MUN",
        src: "/assests/mun.jpg",
        alt: "MUN Event",
        gallery: [ // Array of Fluxus event images
          "/assests/mun/mun1.jpg",
          "/assests/mun/mun2.jpg",
          "/assests/mun/mun3.jpg",
          "/assests/mun/mun4.jpg",
          "/assests/mun/mun5.jpg",
          "/assests/mun/mun6.jpg",
          "/assests/mun/mun7.jpg",
          "/assests/mun/mun8.jpg",
          "/assests/mun/mun9.jpg",
          "/assests/mun/mun10.jpg",
          "/assests/mun/mun11.jpg",
        
          // Add more Fluxus event images here...
        ],
      },

      {
        name: "T vs M",
        src: "/assests/tvsm.jpg",
        alt: "TVSM Event",
        gallery: [ // Array of Fluxus event images
          "/assests/tvsm/tvsm1.jpg",
          "/assests/tvsm/tvsm2.jpg",
          "/assests/tvsm/tvsm3.jpg",
          "/assests/tvsm/tvsm4.jpg",
          "/assests/tvsm/tvsm5.jpg",
          "/assests/tvsm/tvsm6.jpg",
          "/assests/tvsm/tvsm7.jpg",
          "/assests/tvsm/tvsm8.jpg",
          "/assests/tvsm/tvsm9.jpg",
          "/assests/tvsm/tvsm10.jpg",
          "/assests/tvsm/tvsm11.jpg",
          "/assests/tvsm/tvsm12.jpg",
          "/assests/tvsm/tvsm13.jpg",
          "/assests/tvsm/tvsm14.jpg",
          "/assests/tvsm/tvsm15.jpg",
          // Add more Fluxus event images here...
        ],
      },
      // Add other event objects here...
    ]);
  }, []);

  const handleEventClick = (index: number) => {
    // Handle event click to open lightbox with corresponding event gallery
    setSelectedEvent(events[index]);
    setSelectedImageIndex(0); // Reset selected image index to the first image
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
    setSelectedImageIndex(0);
  };

  const handleNextImage = () => {
    // Handle next image click in the lightbox
    setSelectedImageIndex((prevIndex) =>
      (prevIndex + 1) % selectedEvent!.gallery.length
    );
  };

  const handlePrevImage = () => {
    // Handle previous image click in the lightbox
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0
        ? selectedEvent!.gallery.length - 1
        : prevIndex - 1
    );
  };

  return (
    <div className="p-2 my-1 bg-[url('../../public/assests/mainbg.jpg')]">
      <div className="h-[8vh] text-center pt-2.5 text-white first-letter:text-orange-600 font-black text-3xl max-[350px]:text-xl">
        <span className="bg-clip-text text-transparent text-white first-letter:text-orange-600 ">
          GALLERY
        </span>
      </div>
      <div className="mainbody">
        <div className="flex flex-wrap justify-center w-4/5 mx-auto overflow-y-auto mt-1">
          {events.map((event, index) => (
            <div
              key={index}
              className="w-1/3 p-1.5 pb-2"
              style={{ maxWidth: "400px" }}
            >
              <Image
                src={event.src}
                alt={event.alt}
                width={320}
                height={300}
                priority
                className="border-4 border-solid border-white hover:border-yellow-500"
                onClick={() => handleEventClick(index)}
              />
            </div>
          ))}
          {selectedEvent && (
            <ModalComponent
              event={selectedEvent}
              imageIndex={selectedImageIndex}
              onClose={handleCloseModal}
              onNextImage={handleNextImage}
              onPrevImage={handlePrevImage}
            />
          )}
        </div>
      </div>
    </div>
  );
}
