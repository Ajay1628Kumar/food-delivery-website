import React from "react";

const Hero = () => {
  return (
    
    <div className="bg-[url('/src/pages/assets/images/hero-section-img.jpg')] bg-cover h-[calc(512px-3rem)] flex flex-col items-center justify-center text-center rounded-b-2xl">

      <h1 className="text-3xl text-[#2C2F24] md:text-7xl font-[PlayFair]
      font-semibold animate-pulse duration-200">
        Best food for
        <br />
        your taste
      </h1>

      <p className="text-sm text-[#2C2F24] mt-5 w-64 md:w-auto md:text-lg animate-pulse duration-200">
        Discover delectable cuisine and unforgettable moments <br />
        in our welcoming, culinary haven.
      </p>

    </div>
  );
};

export default Hero;
