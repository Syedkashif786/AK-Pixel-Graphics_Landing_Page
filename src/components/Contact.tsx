import Form from "../components/Form";
import config from "../config/index.json";
import React from "react";
import "react-phone-number-input/style.css";
import Image from 'next/image';

import formImg from "../../public/assets/images/ContactUs.jpeg";

const Contact = () => {
  const { contact } = config;
  const { forms } = contact;

  return (
    <div
      id="contact"
      className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-10"
    >
      <div className="flex flex-wrap text-center border-outline-none">
        <div className="w-full sm:w-1/2 p-6">
          <h1 className="text-4xl  mb-2 font-bold text-gray-900 sm:text-4xl md:text-5xl">
            <span className="block xl:inline">{forms.title}</span>{" "}
          </h1>

          <div className="w-full">
            <div className="flex flex-col  items-center justify-center">
              <Image className="lg:w-2/3 lg:h-72 w-52 h-40 md:w-72 md:h-60" src={formImg} alt="title" />
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 p-3">
        <Form />
       </div>
      </div>
    </div>
  );
};
export default Contact;
