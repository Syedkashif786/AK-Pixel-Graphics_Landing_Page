import React from 'react';
import Image from 'next/image';

// import config from '../config/index.json';
import mainHeroImg from "../../public/assets/images/homepage_design.png";

const MainHeroImage = () => {
  
  return (
    
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 z-0">
      <Image
        className="h-56 w-full object-cover object-center sm:h-72 md:h-96 lg:w-full lg:h-full"
        src={mainHeroImg}
        // priority={true}
        alt="happy team image"
      />
    </div>
  
  );
};

export default MainHeroImage;
