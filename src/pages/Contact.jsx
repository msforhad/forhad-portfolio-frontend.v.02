import React, { useContext, useEffect } from 'react'
import { CgProfile } from "react-icons/cg";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter,FaWhatsappSquare } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import { toast } from "react-toastify";
import axios from "axios";
import { AppContext } from '../context/AppContext';

const Contact = () => {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [phone,setPhone]=useState('')
  const [message,setMessage]=useState('')

  const {backendUrl}=useContext(AppContext)

  

  const onSubmitHandler=async(event)=>{
    event.preventDefault()

    try {
      const { data } = await axios.post(`${backendUrl}/contact/send-message`,
        { name, email, phone, message },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      if(data.success){
        setName('')
        setEmail('')
        setPhone('')
        setMessage('')
        toast.success(data.message)
        console.log("data.success")
      }else{
        console.log("data.not success")
        toast.error(data.message)
      }
      
    } catch (error) {
      console.log("data error")
      toast.error(error.message) 
    }
  }

  

  useEffect(()=>{
    scrollTo({top:0,behavior:"smooth"})
  },[])
  return (
    <div className="bg-primary">
      <div className="mx-2 md:mx-30 2xl:mx-40 py-20 md:py-30">
        <div className="grid grid-cols-1 md:grid-cols-[45%50%] gap-[5%]">
          <div className="flex justify-start items-start">
            <div className="color-secondary font-semibold flex flex-col items-center gap-8 mt-8 ">
              <p className="rotate-270 poppins text-sm md:text-base xl:text-lg">
                Contact
              </p>
              <p className="border h-15"></p>
            </div>

            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <p className="color-primary text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold poppins">
                  Have You Any Project?
                  <br /> Please Drop a Message
                </p>
                <p className="color-secondary text-justify outfit text-sm md:text-base xl:text-lg">
                  Get in touch and let me know how i can help. Fill out the form
                  and i’ll be in touch as soon as possible.
                </p>
              </div>

              <div className="flex flex-col gap-10">
                <div>
                  <div className="flex gap-5 items-center">
                    <FaLocationDot className="text-2xl md:text-3xl xl:text-4xl color-primary" />
                    <p className="color-primary font-bold poppins text-sm md:text-base xl:text-lg">
                      Address:
                    </p>
                  </div>
                  <p className="color-secondary text-justify mx-12 text-sm md:text-base xl:text-lg">
                    Tilagarh, Alurtol Road, Sylhet 3100
                  </p>
                </div>

                <div>
                  <div className="flex gap-5 items-center">
                    <FaPhoneAlt className="text-2xl md:text-3xl xl:text-4xl color-primary" />
                    <p className="color-primary font-bold poppins text-sm md:text-base xl:text-lg">
                      Phone:
                    </p>
                  </div>
                  <p className="color-secondary text-justify mx-12 text-sm md:text-base xl:text-lg">
                    01793395006 <br />
                    01619565931
                  </p>
                </div>

                <div>
                  <div className="flex gap-5 items-center">
                    <MdEmail className="text-2xl md:text-3xl xl:text-4xl color-primary" />
                    <p className="color-primary font-bold poppins text-sm md:text-base xl:text-lg">
                      Email:
                    </p>
                  </div>
                  <p className="color-secondary text-justify mx-12 text-sm md:text-base xl:text-lg">
                    forhad.ce.532@gmail.com <br />
                    msforhad717@gmail.com
                  </p>
                </div>

                <div className="flex gap-3 color-primary ">
                  <NavLink
                    className="rounded bg-secondary p-3 "
                    to="https://www.facebook.com/fo.rh.ad.754527?mibextid=ZbWKwL"
                    target="_blank"
                  >
                    <FaFacebook className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl" />
                  </NavLink>

                  <NavLink
                    className="rounded bg-secondary p-3"
                    to="https://wa.me/8801619565931"
                    target="_blank"
                  >
                    <FaWhatsappSquare className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl" />
                  </NavLink>

                  <NavLink
                    className="rounded bg-secondary p-3"
                    to="https://www.linkedin.com/in/md-mehedi-hasan-forhad/"
                    target="_blank"
                  >
                    <FaLinkedin className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl" />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          <div className="py-20">
            <form
              onSubmit={onSubmitHandler}
              className="flex flex-col gap-5 poppins color-primary bg-secondary px-5 md:px-10 py-10 rounded "
            >
              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm outfit md:text-base xl:text-lg">
                  Name
                </label>
                <div className="flex flex-col relative">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="text-sm md:text-base xl:text-lg bg-primary px-8 py-2 rounded border-b-2 border-blue-500 outline-none"
                    placeholder="e.g Forhad"
                    name="name"
                    required
                  />
                  <CgProfile className="absolute left-2 top-3 color-secondary text-sm md:text-base xl:text-lg" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm outfit md:text-base xl:text-lg">
                  Email
                </label>
                <div className="flex flex-col relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="text-sm md:text-base xl:text-lg bg-primary px-8 py-2 rounded border-b-2 border-blue-500 outline-none"
                    placeholder="e.g example@gmail.com"
                    name="email"
                    required
                  />
                  <MdEmail className="absolute left-2 top-3 color-secondary text-sm md:text-base xl:text-lg" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm outfit md:text-base xl:text-lg">
                  Phone
                </label>
                <div className="flex flex-col relative">
                  <input
                    type="number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="text-sm md:text-base xl:text-lg bg-primary px-8 py-2 rounded border-b-2 border-blue-500 outline-none"
                    placeholder="e.g +8801700000000"
                    name="phone"
                    required
                  />
                  <FaPhoneAlt className="absolute left-2 top-3 color-secondary text-sm md:text-base xl:text-lg" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm outfit md:text-base xl:text-lg">
                  Message
                </label>
                <div className="flex flex-col relative">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="text-sm md:text-base xl:text-lg bg-primary px-8 py-2 rounded border-b-2 border-blue-500 outline-none"
                    placeholder="e.g Enter your message"
                    name="message"
                    required
                    cols="30"
                  />
                  <MdMessage className="absolute left-2 top-3 color-secondary text-sm md:text-base xl:text-lg" />
                </div>
              </div>

              <button
                type="submit"
                className="bg-orange-500 rounded py-2 cursor-pointer text-white font-bold poppins tracking-widest text-sm md:text-base xl:text-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact