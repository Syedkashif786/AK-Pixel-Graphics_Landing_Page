import React from 'react';
import Image from 'next/image';


import Contact from '../components/Contact';

import Canvas from '../components/Canvas';
import Clients from '../components/Clients';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';
import MainHeroImage from '../components/MainHeroImage';
import Testimonials from '../components/Testimonials';
import Services from '../components/Services';
import Footer from '../components/Footer';
import whatsppImg from '../../public/assets/images/Whatsapp.png';

// import contact from '../pages/api/contact';

const App = () => {
  return (
    <div className={`bg-background  overflow-hidden`}>
      {/* <div className='bg-[#07222D] py-1 text-center text-white text-sm'>
        <span>Mail to us at: </span>
      <a href="mailto:infoakpixelgraphics@gmail.com">
      <span className="hover:no-underline  text-[#C8F66F]">infoakpixelgraphics@gmail.com</span>
      </a>
      </div> */}
      <div className='relative'>
        <div className="z-10 fixed lg:w-24 lg:h-24 md:w-20 md:h-20 w-16 h-16 lg:bottom-4 lg:right-8 md:bottom-5 md:right-7 bottom-3 right-1  ">
          <a
            aria-label="whatsapp"
            href="https://api.whatsapp.com/send?phone=917379225264"
            target="_blank"
            rel="noreferrer">
              <Image src={whatsppImg} alt="Whatsapp Image" />
          </a>
        </div>
      </div>

      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >

            <Header />
            <MainHero />
          </div>
        </div>
        <MainHeroImage />
      </div>

      <Canvas />
      <LazyShow>
        <>
          <Services />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Clients />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <Testimonials />
      </LazyShow>
      <LazyShow>
        <>
          <Canvas />
          <Contact />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Canvas />
          <Footer />
        </>
      </LazyShow>


    </div>
  );
};

export default App;
