import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from './ui/carousel';
import image1 from '../images/pexels-julia-m-cameron-4144222.jpg';
import image2 from '../images/pexels-kindelmedia-7688336.jpg';
import image3 from '../images/pexels-pixabay-38519.jpg';
import image4 from '../images/pexels-polina-tankilevitch-4443160.jpg';
import features1 from '../images/features1.jpg';
import features2 from '../images/features2.jpg';
import features4 from '../images/features4.jpg';


const HomeSection = () => {
  return (
    <>
      {/* Hero Section with Carousel */}
      <div className="relative">
        <Carousel className="w-[90%] mx-auto ">
          <CarouselContent className="space-x-4 sm:space-x-2">

            <CarouselItem
              className="relative w-full bg-cover bg-center h-screen"
            >
              <img 
                src={image2} 
                alt="Image" 
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h1 className="text-4xl font-bold text-white text-center p-4">
                  SKILLING TO EMPOWER AND SHAPING FUTURES <br /> Unlocking Potential for a Brighter Tomorrow
                </h1>
              </div>
            </CarouselItem>

            <CarouselItem
              className="relative w-full bg-cover bg-center h-screen"
            >
              <img 
                src={image1} 
                alt="Image" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h1 className="text-4xl font-bold text-white text-center p-4">
                  Industry-Ready Skills, Real-World Impact
                </h1>
              </div>
            </CarouselItem>

            <CarouselItem
              className="relative w-full bg-cover bg-center h-screen"
            >
              <img 
                src={image3} 
                alt="Image" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h1 className="text-4xl font-bold text-white text-center p-4">
                  Transforming Talent through Practical Training
                </h1>
              </div>
            </CarouselItem>

            <CarouselItem
              className="relative bg-cover bg-center h-screen"
            >
              <img 
                src={image4} 
                alt="Image" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h1 className="text-4xl font-bold text-white text-center p-4">
                  Crafting Brighter Futures with Skill Development
                </h1>
              </div>
            </CarouselItem>
          </CarouselContent>

          <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 sm:block" />
          <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 sm:block" />
        </Carousel>
      </div>


      {/* Services or Features Row */}
      
      <div className="p-8 bg-gradient-to-r from-cyan-200 via-blue-200 to-orange-100 mt-12 mb-12">
        {/* Heading */}
        <h2 className="text-5xl font-extrabold text-center mb-10 tracking-wide leading-tight"> Features</h2>


        {/* Feature Boxes Section */}
        <div className=" justify-center ">

          {/* Objectives Box */}
          <div className="flex mr-8 ml-8 gap-14 mb-8 h-[40vh] ">
            
            <div className="bg-white shadow-lg p-7 rounded-lg w-1/2 text-center transition-all duration-300 transform hover:bg-gray-200 hover:shadow-xl hover:scale-105 hover:transition-transform">
              <div className="flex items-center justify-center mb-4 mt-4">
                <img
                  src="https://tse4.mm.bing.net/th?id=OIP.WoBzHN6R-_xLFjxqM4WKRQHaHa&pid=Api&P=0&h=180"
                  alt="Objectives Icon"
                  className="w-8 h-8 mr-2"
                />
                <h3 className="font-semibold text-3xl">Objectives</h3>
              </div>
              <p className="text-lg text-gray-800 leading-relaxed">
                Equipping students with job-ready skills, bridging industry needs, and enhancing employability through flexible training.
              </p>
            </div>
            <div className="w-1/2">
              <img
                src={features4}
                alt="Feature Image"
                className="w-full h-[40vh] rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
              />
            </div>
          </div>

          {/* Mission Box */}
          <div className="flex mr-8 ml-8 gap-14 mb-8 h-[40vh]">

            {/* Right Column (Image) */}
            <div className="w-1/2">
              <img
                src={features2}
                alt="Feature Image"
                className="w-full h-[40vh] rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
              />
            </div>
            {/* Left Column (Mission and Data) */}
            <div className="bg-white shadow-lg p-7 rounded-lg mb-4 w-1/2 text-left transition-all duration-300 transform hover:bg-gray-200 hover:shadow-xl hover:scale-105">
              <div className="flex items-center mb-4">
                <img
                  src="https://tse2.mm.bing.net/th?id=OIP.Jj48WD4RpB34KZ_UiGJKhgHaHa&pid=Api&P=0&h=180"
                  alt="Mission Icon"
                  className="w-8 h-8 mr-2"
                />
                <h3 className="font-semibold text-2xl">Mission</h3>
              </div>
              <p className="text-lg text-gray-800 leading-relaxed">
                Empowering youth through skill-integrated education to enhance employability and foster entrepreneurship.
              </p>
            </div>  
          </div>

          {/* Vision Box */}
          <div className="flex mr-8 ml-8 gap-14 mb-8 h-[40vh]">
            {/* Left Column (Vision and Data) */}
            <div className="bg-white shadow-lg p-7 rounded-lg w-1/2 text-left transition-all duration-300 transform hover:bg-gray-200 hover:shadow-xl hover:scale-105">
              <div className="flex items-center mb-4">
                <img
                  src="https://tse3.mm.bing.net/th?id=OIP.aEoAshK5l2vsC_2xr2Q0tAHaHa&pid=Api&P=0&h=180"
                  alt="Vision Icon"
                  className="w-8 h-8 mr-2"
                />
                <h3 className="font-semibold text-2xl">Vision</h3>
              </div>
              <p className="text-lg text-gray-800 leading-relaxed">
                Expanding access to work-integrated education, creating job-ready programs that empower individuals across diverse backgrounds.
              </p>
            </div>

            {/* Right Column (Image) */}
            <div className="w-1/2">
              <img
                src={features1}
                alt="Feature Image"
                className="w-full h-[40vh] rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
              />
            </div>
          </div>

        </div>
      </div>


    </>
  );
};

export default HomeSection;
