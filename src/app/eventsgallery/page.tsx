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
        src: "/assests/fluxus/fluxus 19.jpg",
        alt: "Fluxus Event",
        gallery: [ // Array of Fluxus event images
        "/assests/fluxus/fluxus 3.jpg",
        "/assests/fluxus/fluxus 4.jpg",
        "/assests/fluxus/fluxus 5.jpg",
        "/assests/fluxus/fluxus 6.jpg",
        "/assests/fluxus/fluxus 7.jpg",
        "/assests/fluxus/fluxus 8.jpg",
        "/assests/fluxus/fluxus 9.jpg",
        "/assests/fluxus/fluxus 10.jpg",
        "/assests/fluxus/fluxus 11.jpg",
        "/assests/fluxus/fluxus 12.jpg",
        "/assests/fluxus/fluxus 13.jpg",
        "/assests/fluxus/fluxus 14.jpg",
        "/assests/fluxus/fluxus 15.jpg",
        "/assests/fluxus/fluxus 16.jpg",
        "/assests/fluxus/fluxus 17.jpg",
        "/assests/fluxus/fluxus 18.jpg",
        "/assests/fluxus/fluxus 19.jpg",
        "/assests/fluxus/fluxus 20.jpg",
        "/assests/fluxus/fluxus 21.jpg",
        "/assests/fluxus/fluxus 22.jpg",
        "/assests/fluxus/fluxus 23.jpg",
        "/assests/fluxus/fluxus 24.jpg",
        "/assests/fluxus/fluxus 25.jpg",
        "/assests/fluxus/fluxus 26.jpg",
      
          // Add more Fluxus event images here...
        ],
      },

      {
        name: "E-Summit 23",
        src: "/assests/esummit/e1.jpg",
        alt: "ESummit",
        gallery: [ 
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

          
        ],
      },
      {
        name: "IITI MUN",
        src: "/assests/mun/mun6.jpg",
        alt: "MUN Event",
        gallery: [ // Array of Fluxus event images
          "/assests/mun/mun1.jpg",
          "/assests/mun/mun2.jpg",
          "/assests/mun/mun 2.jpg",
          "/assests/mun/mun3.jpg",
          "/assests/mun/mun 3.jpg",
          "/assests/mun/mun4.jpg",
          "/assests/mun/mun5.jpg",
          "/assests/mun/mun6.jpg",
          "/assests/mun/mun7.jpg",
          "/assests/mun/mun8.jpg",
        
          // Add more Fluxus event images here...
        ],
      },
      {
        name: "Independence Day",
        src: "/assests/independence/i 9.jpg",
        alt: "TVSM Event",
        gallery: [ // Array of Fluxus event images
          "/assests/independence/i 13.jpg",
          "/assests/independence/i 1.jpg",
          "/assests/independence/i 2.jpg",
          "/assests/independence/i 3.jpg",
          "/assests/independence/i 4.jpg",
          "/assests/independence/i 5.jpg",
          "/assests/independence/i 6.jpg",
          "/assests/independence/i 7.jpg",
          "/assests/independence/i 8.jpg",
          "/assests/independence/i 9.jpg",
          "/assests/independence/i 10.jpg",
          "/assests/independence/i 11.jpg",
          "/assests/independence/i 12.jpg",
          
          // Add more Fluxus event images here...
        ],
      },
      {
        name: "Republic Day",
        src: "/assests/republic/republic3.jpg",
        alt: "Republic Day",
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
          // Add more Fluxus event images here...
        ],
      },

      

      {
        name: "Lakshya",
        src: "/assests/lakshya/lakshya 8.jpg",
        alt: "Lakshya Event",
        gallery: [ // Array of Fluxus event images
          "/assests/lakshya/lakshya 1.jpg",
          "/assests/lakshya/lakshya 2.jpg",
          "/assests/lakshya/lakshya 3.jpg",
          "/assests/lakshya/lakshya 4.jpg",
          "/assests/lakshya/lakshya 5.jpg",
          "/assests/lakshya/lakshya 6.jpg",
          "/assests/lakshya/lakshya 7.jpg",
          "/assests/lakshya/lakshya 8.jpg",
          "/assests/lakshya/lakshya 9.jpg",
          "/assests/lakshya/lakshya 10.jpg",
      
          // Add more Fluxus event images here...
        ],
      },

     

      {
        name: "TEDx",
        src: "/assests/tedx/t 1.1.jpg",
        alt: "TedX Event",
        gallery: [ // Array of Fluxus event images
          "/assests/tedx/t 1.jpg",
          "/assests/tedx/t 2.jpg",
          "/assests/tedx/t 3.jpg",
          "/assests/tedx/t 4.jpg",
          "/assests/tedx/t 5.jpg",
          "/assests/tedx/t 6.jpg",
          "/assests/tedx/t 7.jpg",
          "/assests/tedx/t 8.jpg",
          
        
          
          // Add more Fluxus event images here...
        ],
      },
      {
        name: "T vs M",
        src: "/assests/tvsm/tvsm 1.jpg",
        alt: "TVSM Event",
        gallery: [ // Array of Fluxus event images
          "/assests/tvsm/tvsm 1.jpg",
          "/assests/tvsm/tvsm 2.jpg",
          
          // Add more Fluxus event images here...
        ],
      },
      {
        name: "11th Convocation",
        src: "/assests/convocation/convocation5.jpg",
        alt: "convocation",
        gallery: [ // Array of Fluxus event images
          "/assests/convocation/convocation1.jpg",
          "/assests/convocation/convocation2.jpg",
          "/assests/convocation/convocation3.jpg",
          "/assests/convocation/convocation4.jpg",
          "/assests/convocation/convocation7.jpg",
          "/assests/convocation/convocation5.jpg",
          "/assests/convocation/convocation6.jpg",
          
          // Add more Fluxus event images here...
        ],
      },
      
      // {
      //   name: "IBCC",
      //   src: "/assests/ibcc/ibcc 1.jpg",
      //   alt: "IBCC",
      //   gallery: [ // Array of Fluxus event images
      //     "/assests/ibcc/ibcc 1.jpg",
      //     "/assests/ibcc/ibcc 2.jpg",
      //     "/assests/ibcc/ibcc 3.jpg",
      //     "/assests/ibcc/ibcc 4.jpg",
          
      //     // Add more Fluxus event images here...
      //   ],
      // },
      {
        name: "JOSH 3.0",
        src: "/assests/josh/josh1.1.jpg",
        alt: "JOSH 3.0",
        gallery: [ // Array of Fluxus event images
          "/assests/josh/josh1.jpg",
          "/assests/josh/josh2.jpg",
          "/assests/josh/josh3.jpg",
          "/assests/josh/josh4.jpg",
          "/assests/josh/josh5.jpg",
          "/assests/josh/josh6.jpg",
          "/assests/josh/josh7.jpg",
          
          // Add more Fluxus event images here...
        ],
      },
      {
        name: "Research and Industrial Conclave",
        src: "/assests/ric/ric5.jpg",
        alt:"RIC",
        gallery: [ // Array of Fluxus event images
          "/assests/ric/ric1.jpg",
          "/assests/ric/ric2.jpg",
          "/assests/ric/ric3.jpg",
          "/assests/ric/ric4.jpg",
          "/assests/ric/ric5.jpg",
          "/assests/ric/ric6.jpg",
        
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
    <div className="p-2 my-1 bg-[url('../../public/assests/mainbg.jpg')] overflow-hidden">
      <div className="h-[8vh] text-center pt-2.5 text-white  font-black text-3xl max-[350px]:text-xl">
        <span className="bg-clip-text text-transparent text-yellow-500  text-5xl ">
          EVENTS
        </span>
      </div>
      <div className="mainbody w-full">
        <div className="flex flex-wrap justify-center w-full mx-auto overflow-y-auto mt-2 px-2 overflow-hidden">
          {events.map((event, index) => (
            <div
              key={index}
              className="w-1/3 p-3 pb-3 max-md:w-1/2 max-[469px]:w-[90%] mx-auto"
              style={{ maxWidth: "600px" }}
            >
              <Image
                src={event.src}
                alt={event.alt}
                width={820}
                height={800}
                priority
                className="border-4 border-solid border-white hover:border-yellow-500 cursor-pointer"
                onClick={() => handleEventClick(index)}
              />
              <p className="text-center p-1 text-white text-lg sm:text-xl md:text-2xl lg:text-4xl     font-semibold">{event.name}</p>
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
