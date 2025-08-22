import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { IoLogoFacebook } from "react-icons/io5";
import { FaWhatsappSquare } from "react-icons/fa";

import assets from "../../assets/image/logo-2xl.png";

import { FaLinkedin } from "react-icons/fa";
import { AppContext } from '../../context/AppContext';
import { FaGithub } from "react-icons/fa6";



const HeroSection = () => {
  const{mode}=useContext(AppContext)
  return (
    <div className="mx-2 md:mx-10 lg:mx-20 2xl:mx-30 ">
      <div className="flex justify-between items-center py-10 md:py-20 gap-5">
        {/* first section */}
        <div className="hidden md:flex">
          <ul className="flex flex-col items-center justify-center gap-3 color-primary">
            <li className="text-2xl">
              <NavLink
                to="https://www.facebook.com/fo.rh.ad.754527?mibextid=ZbWKwL"
                target="_blank"
              >
                <IoLogoFacebook />
              </NavLink>
            </li>
            <li className="text-2xl">
              <NavLink to="https://wa.me/8801619565931" target="_blank">
                <FaWhatsappSquare />
              </NavLink>
            </li>
            <li className="text-2xl">
              <NavLink
                to="https://www.linkedin.com/in/md-mehedi-hasan-forhad/"
                target="_blank"
              >
                <FaLinkedin />
              </NavLink>
            </li>
            <li className="text-2xl">
              <NavLink to="https://github.com/msforhad" target="_blank">
                <FaGithub />
              </NavLink>
            </li>
            <li className="border w-0 h-20"></li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[37%60%] gap-10 md:gap-[3%] color-primary justify-items-center items-center">
          <img className="w-50 md:w-60 lg:w-80" src={assets} alt="" />
          <div className=" flex flex-col justify-center items-center md:items-start md:pl-10">
            <p className="poppins text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
              Md. Mehedi Hasan Forhad
            </p>
            <p className="outfit font-light color-secondary text-sm md:text-base lg:text-lg xl:text-xl">
              Civil Engineer | Full-Stack Web Developer
            </p>
            <p className="outfit text-sm md:text-base lg:text-lg xl:text-xl  py-5 color-secondary text-center md:text-justify">
              We Design & Build Creative Products that combine innovation,
              functionality, and aesthetics to deliver meaningful user
              experiences.
            </p>
            <NavLink
              className={`text-sm md:text-base lg:text-lg xl:text-xl border rounded font-bold py-1.5 px-4  ${
                mode === "light"
                  ? "text-black hover:bg-black hover:text-white"
                  : "text-white hover:bg-white hover:text-black"
              } transition-all duration-700 ease-in-out`}
              to="/Contact"
            >
              GET IN TOUCH
            </NavLink>
          </div>
        </div>

        <div className="hidden md:flex">
          <ul className="flex flex-col items-center justify-center gap-13">
            <li className="rotate-90 stencil tracking-[6px]">
              <p className="color-primary text-sm md:text-base lg:text-lg xl:text-xl">FORHAD</p>
            </li>
            <li>
              <p className=" border w-0 h-20  color-primary"></p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeroSection