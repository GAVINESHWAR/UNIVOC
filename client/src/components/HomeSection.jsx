import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "./ui/carousel";

const HomeSection = () => {
  return (
    <>
      {/* Hero Section with Carousel */}
      <div className="relative">
        <Carousel className="w-full mx-auto my-15 max-w-full">
          <CarouselContent className="space-x-4 sm:space-x-2">
            <CarouselItem
              className="relative w-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://media.istockphoto.com/id/1218511457/photo/top-view-asian-ux-developer-and-ui-designer-brainstorming-about-mobile-app-interface.webp?a=1&b=1&s=612x612&w=0&k=20&c=iOAHgk17yMAvF4Bhc3MHkaxCUcBWeY41qT5CvufOEn8=')",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                <h1 className="text-4xl font-bold text-white text-center p-4">
                  SKILLING TO EMPOWER AND SHAPING FUTURES <br /> Unlocking Potential for a Brighter Tomorrow
                </h1>
              </div>
            </CarouselItem>

            <CarouselItem
              className="relative w-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://media.istockphoto.com/id/1143678440/photo/personal-growth-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=TsmpIcZDW4VqGl2dyRZKa5EoObtOEB5np4ZUQxwlpsg=')",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                <h1 className="text-4xl font-bold text-white text-center p-4">
                  Industry-Ready Skills, Real-World Impact
                </h1>
              </div>
            </CarouselItem>

            <CarouselItem
              className="relative w-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://media.istockphoto.com/id/1197640540/photo/website-design-developing-programming-and-coding-technologies.jpg?s=2048x2048&w=is&k=20&c=pMfSVKf09RnJoSf0J_1Rsfpq2LJZCGES0CTJijL4kcM=')",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                <h1 className="text-4xl font-bold text-white text-center p-4">
                  Transforming Talent through Practical Training
                </h1>
              </div>
            </CarouselItem>
            
            <CarouselItem
              className="relative h-[400px] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://plus.unsplash.com/premium_photo-1683880731743-da95ceb12e15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvcmtmb3JjZSUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww')",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
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
      <div className="flex justify-center space-x-6 mt-12 p-6">
      {/* Mission Box */}
      <div className="bg-white shadow-lg p-7 rounded-lg w-1/3 text-center transition-all duration-300 transform hover:bg-gray-200 hover:shadow-xl">
        <div className="flex items-center justify-center mb-4">
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.Jj48WD4RpB34KZ_UiGJKhgHaHa&pid=Api&P=0&h=180" 
            alt="Mission Icon"
            className="w-8 h-8 mr-2"
          />
          <h3 className="font-semibold text-2xl">Mission</h3>
      </div>
          <p className="text-lg text-gray-800 leading-relaxed max-w-xs mx-auto">
            Empowering youth through skill-integrated education to enhance employability and foster entrepreneurship.
          </p>
  </div>

      {/* Objectives Box */}
     <div className="bg-white shadow-lg p-7 rounded-lg w-1/3 text-center transition-all duration-300 transform hover:bg-gray-200 hover:shadow-xl">
       <div className="flex items-center justify-center mb-4">
         <img
           src="https://tse4.mm.bing.net/th?id=OIP.WoBzHN6R-_xLFjxqM4WKRQHaHa&pid=Api&P=0&h=180" 
           alt="Objectives Icon"
           className="w-8 h-8 mr-2" 
         />
         <h3 className="font-semibold text-2xl">Objectives</h3>
       </div>
        <p className="text-lg text-gray-800 leading-relaxed max-w-xs mx-auto ">
           Equipping students with job-ready skills, bridging industry needs, and enhancing employability through flexible training.
        </p>
    </div>

    {/* Vision Box */}
    <div className="bg-white shadow-lg p-7 rounded-lg w-1/3 text-center transition-all duration-300 transform hover:bg-gray-200 hover:shadow-xl">
      <div className="flex items-center justify-center mb-4">
         <img
           src="https://tse3.mm.bing.net/th?id=OIP.aEoAshK5l2vsC_2xr2Q0tAHaHa&pid=Api&P=0&h=180" 
           alt="Vision Icon"
           className="w-8 h-8 mr-2" 
         />
        <h3 className="font-semibold text-2xl">Vision</h3>
      </div>
         <p className="text-lg text-gray-800 leading-relaxed max-w-xs mx-auto">
               Expanding access to work-integrated education, creating job-ready programs that empower individuals across diverse backgrounds.
         </p>
      </div>
   </div>
   </>
  );
};

export default HomeSection;
