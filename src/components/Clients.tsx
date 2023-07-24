import React from 'react';
import Image from 'next/image';

import config from '../config/index.json';
import resinalyLogo from '../../public/assets/images/resinaly_logo_color.jpeg';
import beezeeIcon from '../../public/assets/images/beezee.jpeg';
import newLifeLogo from '../../public/assets/images/New_Life_logo.png';
import famIcon from '../../public/assets/images/Fam_logo.png';
import aeIcon from '../../public/assets/images/logo_AE.png';

const { clients } = config;

const { subtitle, description } = clients;


const Clients = () => {
  return (
    <div className={`py-12 bg-background`} id="clients">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">     
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800 mb-8">
            {subtitle}
          </h1>       
          <p className="mb-4 text-center w-full sm:5/6 text-xl text-gray-500">
            {description}
          </p>
        </div>

        <div className="mt-4 flex md:flex-row flex-wrap gap-x-1 justify-center">
          <div
            className={`flex flex-col w-5/6 lg:w-[25rem] md:w-[14rem] mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-background mt-1`}>
            <div className={`flex   rounded overflow-hidden`} >
              <Image className='lg:w-96 lg:h-56 w-auto h-auto'
                src={resinalyLogo}
                alt="famsolar icon" />
            </div>
          </div>

          <div
            className={`flex flex-col w-5/6 lg:w-[25rem] md:w-[14rem] mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-background mt-1`}>
            <div
              className={`flex  rounded overflow-hidden`} >
              <Image className='lg:w-96 lg:h-56 w-auto h-auto'
                src={beezeeIcon}
                alt="beezeeminds icon" />
            </div>
          </div>

          <div
            className={`flex flex-col w-5/6 lg:w-[25rem] md:w-[14rem] mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-background mt-1 `}>
            <div
              className={`flex   rounded overflow-hidden`} >
              <Image className='lg:w-96 lg:h-56 w-auto h-auto'
                src={newLifeLogo}
                alt="resinaly image" />
            </div>
          </div>
                 
          <div
            className={`flex flex-col w-5/6 lg:w-[25rem] md:w-[14rem] mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-background mt-1`}>
            <div
              className={`flex   rounded overflow-hidden`} >
              <Image className='lg:w-96 lg:h-56 md:w-64 md:h-36 w-auto h-auto'
                src={aeIcon}
                alt="AE designer image" />
            </div>
          </div>
          <div
            className={`flex flex-col w-5/6 lg:w-[25rem] md:w-[14rem] mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-background mt-1`}>
            <div
              className={`flex  rounded overflow-hidden`} >
              <Image className='lg:w-96 lg:h-56 md:w-64 md:h-36 w-auto h-auto'
                src={famIcon}
                alt="Social Media image" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Clients;
