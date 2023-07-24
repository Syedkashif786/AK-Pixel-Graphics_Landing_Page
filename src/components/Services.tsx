import React from 'react';
import Image from 'next/image';
import config from '../config/index.json';


import socialMediaImg from "../../public/assets/images/Social_Media.png";
import eBookImg from "../../public/assets/images/Ebook.png";
import posterImg from "../../public/assets/images/Poster.png";
import logoImg from "../../public/assets/images/Logo_Design.png";
import thumbnailImg from "../../public/assets/images/Thumbnail.png";
import letterheadImg from "../../public/assets/images/Letterhead_Design.png";
import businessCardImg from "../../public/assets/images/Business_Card.png";
import companyProfileImg from "../../public/assets/images/Company_Profile.png";
import menuImg from "../../public/assets/images/Menu.png";
import flyerImg from "../../public/assets/images/Flyer.png";
import brochureImg from "../../public/assets/images/Brochure.png";
// import arrowImg from "../../public/assets/images/arrow.png";


const Services = () => {
  const { services } = config;
  const [socialMedia, eBook, poster, logo, videoThumbnail] = services.digitalServices;
  const [letterhead, businessCard, companyProfile, brochure, restaurantMenu, flyer] = services.printServices;


  return (
    <section className={`bg-background pt-8`} id="services">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
        <h1 className={`w-full my-2 lg:text-5xl text-3xl md:text-5xl font-bold leading-tight text-center text-gray-800 mb-8`}>
          {services.title}
        </h1>
        <p className="mb-4 text-center w-full sm:5/6 text-xl text-gray-500">
          {services.description}
        </p>
        <p className="w-full text-center sm:5/6 pt-3 mt-3 font-bold text-2xl text-gray-800">
          {services.heading}
        </p>
        <div
          className={`h-1 mx-auto bg-[#C8F66F] w-48 opacity-50 my-0 py-0 rounded-t mb-4`}
        ></div>

        <div
          className={`flex md:flex-row flex-wrap gap-x-1 justify-center`}>
          <div
            className={`flex flex-col w-5/6 lg:w-[25rem] md:w-[14rem] mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-background mt-1`}>
            <div
              className={`flex-1  text-gray-800 rounded-t rounded-b-none overflow-hidden shadow transition-all  delay-0  duration-75 lg:hover:scale-[1.03]`} >
              <div className={'bg-[#07222D] text-center'}>

                <a className='text-white hover:text-gray-100' href="https://www.behance.net/gallery/164964111/Social-Media-Design" target='blank'>
                  <Image
                    src={socialMediaImg}
                    alt="Social Media image" />
                  <span className='flex flex-row justify-center items-center'>{socialMedia?.name}
                  </span>
                 
                
                  
                </a>
              </div>
              {/* <div className={`text-xl font-normal text-center`}>
                {socialMedia?.name}
              </div> */}
            </div>

          </div>

          <div
            className={`flex flex-col w-5/6 lg:w-[25rem] md:w-[14rem] mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-background mt-1 `}>
            <div
              className={`flex-1  text-gray-800 rounded-t rounded-b-none overflow-hidden shadow transition-all  delay-0  duration-75 lg:hover:scale-[1.03]`} >
              <div className={'bg-[#07222D] text-center '}>

                <a className='text-white hover:text-gray-100' href="https://www.behance.net/gallery/175327897/Logo-Design" target='blank'>
                  <Image
                    src={logoImg}
                    alt="Logo Image" />
                  <span className=''>{logo?.name}</span>
                </a>
              </div>
              {/* <div className={`text-xl font-normal text-center`}>
                {socialMedia?.name}
              </div> */}
            </div>

          </div>
          <div
            className={`flex flex-col w-5/6 lg:w-[25rem] md:w-[14rem] mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-background mt-1 `}>
            <div
              className={`flex-1  text-gray-800 rounded-t rounded-b-none overflow-hidden shadow transition-all  delay-0  duration-75 lg:hover:scale-[1.03]`} >
              <div className={'bg-[#07222D] text-center '}>

                <a className='text-white hover:text-gray-100' href="https://www.behance.net/gallery/175322543/Ebook-Design" target='blank'>
                  <Image
                    src={eBookImg}
                    alt="Ebook Image" />
                  <span className=''>{eBook?.name}</span>
                </a>
              </div>
              {/* <div className={`text-xl font-normal text-center`}>
                {socialMedia?.name}
              </div> */}
            </div>

          </div>

          <div
            className={`flex flex-col w-5/6 lg:w-[25rem] md:w-[14rem] mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-background mt-1 `}>
            <div
              className={`flex-1  text-gray-800 rounded-t rounded-b-none overflow-hidden shadow transition-all  delay-0  duration-75 lg:hover:scale-[1.03]`} >
              <div className={'bg-[#07222D] text-center '}>

                <a className='text-white hover:text-gray-100' href="https://www.behance.net/gallery/165737365/Youtube-Thumbnail-Design" target='blank'>
                  <Image
                    src={thumbnailImg}
                    alt="Youtube Thumbnail Image" />
                  <span className=''>{videoThumbnail?.name}</span>
                </a>
              </div>
              {/* <div className={`text-xl font-normal text-center`}>
                {socialMedia?.name}
              </div> */}
            </div>

          </div>

          <div
            className={`flex flex-col w-5/6 lg:w-[25rem] md:w-[14rem] mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-background mt-1 `}>
            <div
              className={`flex-1  text-gray-800 rounded-t rounded-b-none overflow-hidden shadow transition-all  delay-0  duration-75 lg:hover:scale-[1.03]`} >
              <div className={'bg-[#07222D] text-center '}>

                <a className='text-white hover:text-gray-100' href="https://www.behance.net/gallery/175273633/Poster-Design" target='blank'>
                  <Image
                    src={posterImg}
                    alt="Poster Image" />
                  <span className=''>{poster?.name}</span>
                </a>
              </div>
              {/* <div className={`text-xl font-normal text-center`}>
                {socialMedia?.name}
              </div> */}
            </div>

          </div>
        </div>

        
        <div className='flex md:flex-row flex-wrap justify-center gap-x-1'>
          <p className="w-full text-center sm:5/6 pt-3 mt-8 font-bold text-2xl text-gray-800 ">
            {services.headingTwo}
          </p>
          <div className={`w-full`}>
            <div
              className={`h-1 mx-auto bg-[#C8F66F] w-44 opacity-50 my-0 py-0 rounded-t mb-4`}
              ></div>
          </div>

          <div
            className={`flex flex-col w-5/6 lg:w-[25rem] md:w-[14rem] mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-background mt-1 `}>
            <div
              className={`flex-1  text-gray-800 rounded-t rounded-b-none overflow-hidden shadow transition-all  delay-0  duration-75 lg:hover:scale-[1.03]`} >
              <div className={'bg-[#07222D] text-center '}>

                <a className='text-white hover:text-gray-100' href="https://www.behance.net/gallery/164975031/Letterhead-Design" target='blank'>
                  <Image
                    src={letterheadImg}
                    alt="Letterhead Image" />
                  <span className=''>{letterhead?.name}</span>
                </a>
              </div>
              {/* <div className={`text-xl font-normal text-center`}>
                {socialMedia?.name}
              </div> */}
            </div>

          </div>

          <div
            className={`flex flex-col w-5/6 lg:w-[25rem] md:w-[14rem] mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-background mt-1 `}>
            <div
              className={`flex-1  text-gray-800 rounded-t rounded-b-none overflow-hidden shadow transition-all  delay-0  duration-75 lg:hover:scale-[1.03]`} >
              <div className={'bg-[#07222D] text-center '}>

                <a className='text-white hover:text-gray-100' href="https://www.behance.net/gallery/175336449/Menu-Design" target='blank'>
                  <Image
                    src={menuImg}
                    alt="Restaurant Menu image" />
                  <span className=''>{restaurantMenu?.name}</span>
                </a>
              </div>
              {/* <div className={`text-xl font-normal text-center`}>
                {socialMedia?.name}
              </div> */}
            </div>

          </div>
          <div
            className={`flex flex-col w-5/6 lg:w-[25rem] md:w-[14rem] mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-background mt-1 `}>
            <div
              className={`flex-1  text-gray-800 rounded-t rounded-b-none overflow-hidden shadow transition-all  delay-0  duration-75 lg:hover:scale-[1.03]`} >
              <div className={'bg-[#07222D] text-center '}>

                <a className='text-white hover:text-gray-100' href="https://www.behance.net/gallery/175329419/Company-Profile" target='blank'>
                  <Image
                    src={companyProfileImg}
                    alt="Company Profile Image" />
                  <span className=''>{companyProfile?.name}</span>
                </a>
              </div>
              {/* <div className={`text-xl font-normal text-center`}>
                {socialMedia?.name}
              </div> */}
            </div>

          </div>

          <div
            className={`flex flex-col w-5/6 lg:w-[25rem] md:w-[14rem] mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-background mt-1 `}>
            <div
              className={`flex-1  text-gray-800 rounded-t rounded-b-none overflow-hidden shadow transition-all  delay-0  duration-75 lg:hover:scale-[1.03]`} >
              <div className={'bg-[#07222D] text-center '}>

                <a className='text-white hover:text-gray-100' href="https://www.behance.net/gallery/175335991/Brochure-Design" target='blank'>
                  <Image
                    src={brochureImg}
                    alt="Brochure Image" />
                  <span className=''>{brochure?.name}</span>
                </a>
              </div>
              {/* <div className={`text-xl font-normal text-center`}>
                {socialMedia?.name}
              </div> */}
            </div>

          </div>

          <div
            className={`flex flex-col w-5/6 lg:w-[25rem] md:w-[14rem] mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-background mt-1 `}>
            <div
              className={`flex-1  text-gray-800 rounded-t rounded-b-none overflow-hidden shadow transition-all  delay-0  duration-75 lg:hover:scale-[1.03]`} >
              <div className={'bg-[#07222D] text-center '}>

                <a className='text-white hover:text-gray-100' href="https://www.behance.net/gallery/164974269/Flyer-Design" target='blank'>
                  <Image
                    src={flyerImg}
                    alt="Flyer Image" />
                  <span className=''>{flyer?.name}</span>
                </a>
              </div>
              {/* <div className={`text-xl font-normal text-center`}>
                {socialMedia?.name}
              </div> */}
            </div>

          </div>
          <div
            className={`flex flex-col w-5/6 lg:w-[25rem] md:w-[14rem] mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-background mt-1 `}>
            <div
              className={`flex-1  text-gray-800 rounded-t rounded-b-none overflow-hidden shadow transition-all  delay-0  duration-75 lg:hover:scale-[1.03]`} >
              <div className={'bg-[#07222D] text-center '}>

                <a className='text-white hover:text-gray-100' href="https://www.behance.net/gallery/175329069/Business-Card-Design" target='blank'>
                  <Image
                    src={businessCardImg}
                    alt="Business Card Image" />
                  <span className=''>{businessCard?.name}</span>
                </a>
              </div>
              {/* <div className={`text-xl font-normal text-center`}>
                {socialMedia?.name}
              </div> */}
            </div>

          </div>


              </div>
      </div>



    </section>
  );
};

export default Services;
