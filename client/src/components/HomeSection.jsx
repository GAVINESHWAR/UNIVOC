import React, { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from './ui/carousel';
import image from '../images/UNIVOC banner design.png';
import image1 from '../images/pexels-julia-m-cameron-4144222.jpg';
import image2 from '../images/pexels-kindelmedia-7688336.jpg';
import image3 from '../images/pexels-pixabay-38519.jpg';
import image4 from '../images/pexels-polina-tankilevitch-4443160.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomeSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // State for current slide index
  const images = [image, image1, image2, image3, image4]; // Array of image sources

  // Effect to initialize AOS and set up auto-slide
  useEffect(() => {
    AOS.init({ duration: 500, once: true }); // Initialize AOS

    // Set up interval to automatically change slides every 3 seconds (3000ms)
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop through images
    }, 4000); // Adjust the time as needed

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <>
      {/* Hero Section with Carousel */}
      <div className="relative">
        <Carousel className="w-[85%] mx-auto">
          <CarouselContent className="space-x-4 sm:space-x-2">
            {images.map((img, index) => (
              <CarouselItem
                key={index}
                className={`relative w-full bg-cover bg-center min-h-screen ${currentIndex === index ? "block" : "hidden"}`}
              >
                <img 
                  src={img} 
                  alt={`Image ${index + 1}`} 
                  className="absolute inset-0 w-full min-h-screen object-cover"
                />
                {index === 1 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black bg-opacity-20 p-6 rounded-lg shadow-lg">
                    <h1 className="text-4xl font-bold text-white text-center">
                      SKILLING TO EMPOWER AND SHAPING FUTURES <br /> Unlocking Potential for a Brighter Tomorrow
                    </h1>
                  </div>
                </div>
                
                )}
                {index === 2 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black bg-opacity-20 p-6 rounded-lg shadow-lg w-3/4 mx-auto">
                      <h1 className="text-4xl font-bold text-white text-center">
                        Industry-Ready Skills, Real-World Impact
                      </h1>
                    </div>
                  </div>
                )}
                {index === 3 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black bg-opacity-20 p-6 rounded-lg shadow-lg w-3/4 mx-auto">
                      <h1 className="text-4xl font-bold text-white text-center">
                        Transforming Talent through Practical Training
                      </h1>
                    </div>
                  </div>
                )}
                {index === 4 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black bg-opacity-20 p-6 rounded-lg shadow-lg w-3/4 mx-auto">
                      <h1 className="text-4xl font-bold text-white text-center">
                        Crafting Brighter Futures with Skill Development
                      </h1>
                    </div>
                  </div>
                )}
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 sm:block" />
          <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 sm:block" />
        </Carousel>
      </div>
    </>
  );
};

export default HomeSection;
