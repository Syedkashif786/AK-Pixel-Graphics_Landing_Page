import React, { Fragment} from 'react';
// import Modal from "../components/Modal";

import config from '../config/index.json';

const MainHero = () => {
  const { mainHero } = config;
  // const [showModel, setShowModel] = useState(false)

  return (
    <Fragment>
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">{mainHero.title}<p className='-mt-4'>{mainHero.title_two}<span className='text-[#C8F66F] '>{mainHero.title_three}</span></p></span>{' '}

          </h1>
          <p className="mt-3 text-base  text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            {mainHero.description}
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md  flex flex-row">
               
              <a href="https://api.whatsapp.com/send?phone=917379225264" target='blank'>
              {/* // onClick={() => { setShowModel(true) }} */}
                {/* // href={mainHero.primaryAction.href} */}
                <button type='button' className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-[#C8F66F]  bg-[#07222D] hover:bg-border hover:bg-[#C8F66F] hover:shadow-lg hover:text-black md:py-4 md:text-lg md:px-10`}>
                Let's Work Together
              </button>
              </a>
              {/* <button type='button' className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-[#07222D] hover:bg-border hover:bg-[#C8F66F] hover:shadow-lg hover:text-black md:py-4 md:text-lg md:px-10`}>Our Portfolio</button> */}
            </div>
          </div>
          {/* <Modal isVisible={showModel} onClose={() => { setShowModel(false); }} isVsisble={undefined} /> */}



        </div>
      </main>
    </Fragment>

  );
};

export default MainHero;


// text-4xl mt-4 mb-2 font-bold text-gray-900 sm:text-3xl md:text-4xl
// mb-4 text-xl font-medium text-gray-900