import React from 'react';
import {useForm} from "react-hook-form";
import {useState} from "react";



import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { E164Number } from "libphonenumber-js/types";
const Form = () => {
    
const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (e: any) => {
    handleSubmitter(e);
  };

  const handleSubmitter = (e: any) => {
    console.log(e);
    console.log("Sending");
    let data = {
      name,
      email,
      message,
      phone,
    };
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        // setSubmitted(true)
        setName("");
        setEmail("");
        // setBody('')
      }
    });
    alert("Form Submitted");
  };


  return (
   
          <form
            className="bg-white  rounded px-8 pt-6 flex flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mb-3">
              <label
                htmlFor="name"
                className="block text-gray-500 text-sm font-bold mb-2 flex flex-row"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("name", { required: true })}
                id="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                placeholder="Enter Your Full Name"
              />
              {errors.name && (
                <p className="text-red-600 text-left text-sm ">Please enter your full name</p>
              )}
            </div>

            <div className="mb-3">
              <label
                htmlFor="email"
                className="block text-gray-500 text-sm font-bold mb-2 flex flex-row"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
                id="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                placeholder="Email"
              />
              {errors.email && (
                <p className="text-red-600 text-left text-sm">Please enter correct email</p>
              )}
            </div>
            <div className="mb-3">
              <label
                htmlFor="phone"
                className="block text-gray-500 text-sm font-bold mb-2 flex flex-row"
              >
                Phone Number
              </label>
              <PhoneInput
                placeholder="Enter your phone number"
                {...register("phone",{required: true})}
                defaultCountry="IN"
                value={phone}
                onChange={(e: E164Number) => {
                  setPhone(e);
                }}
              />
              {errors.phone && (
                <p className="text-red-600 text-left text-sm ">Please enter correct phone number</p>
              )}
            </div>
            <div className="mb-3">
              <label
                htmlFor="message"
                className="block text-gray-500 text-sm font-bold mb-2 flex flex-row"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24 lg:h-16"
                {...register("message", { required: true })}
                id="message"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                // cols={30}
                // rows={10}
                style={{ resize: "none" }}
                placeholder="Type your message"
              ></textarea>
              {errors.message && (
                <p className="text-red-600 text-left text-sm">Please enter message</p>
              )}
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-[#07222D] hover:bg-[#C8F66F] hover:text-black text-[#C8F66F] rounded-full border border-transparent hover:bg-border font-bold py-3 px-8 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
              {/* <button className='ml-4 bg-[#55586e] hover:bg-[#f6b76e] hover:text-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'onClick={()=>onClose()}>Close</button> */}
            </div>
          </form>
        
  )
}

export default Form;