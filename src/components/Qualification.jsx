import React from 'react'

import { PiStudentFill } from "react-icons/pi";
import { MdOutlineCalendarMonth } from "react-icons/md";



const Qualification = () => {
  return (
    <div className="flex flex-col gap-15 items-center mx-2 md:mx-10 lg:mx-20 xl:mx-30 color-primary py-10 ">
      <div className="flex flex-col items-center">
        <p className="font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl poppins color-primary">
          Qualification
        </p>
        <p className="flex items-center gap-2 text-sm md:text-base xl:text-lg color-secondary outfit font-bold">
          <PiStudentFill />
          <span>My Learning Journey</span>
        </p>
      </div>

      <div className="grid grid-cols-[46%6%46%] gap-[2%] ">
        <div className=" flex flex-col gap-35 lg:gap-30 xl:gap-26">
          <div className="flex gap-2 flex-col items-end poppins">
            <p className="font-bold text-sm md:text-base xl:text-lg">
              SSC in Science
            </p>
            <p className="color-secondary poppins text-end text-sm md:text-base xl:text-lg ">
              Purnamati Mansur Ahmed High School
            </p>
            <p className="text-xs md:text-sm lg:text-base flex items-center color-secondary gap-2">
              <MdOutlineCalendarMonth />
              <span>2014 - 2019</span>
            </p>
          </div>

          <div className="flex gap-2 flex-col items-end poppins">
            <p className="font-bold text-sm md:text-base xl:text-lg">
              HSC in Science
            </p>
            <p className="color-secondary text-sm md:text-base xl:text-lg text-end">
              Paruara Abdul Mation Khasru College
            </p>
            <p className="text-xs md:text-sm lg:text-base flex items-center color-secondary gap-2">
              <MdOutlineCalendarMonth />
              <span>2019 - 2021</span>
            </p>
          </div>

          <div className="flex gap-2 flex-col items-end poppins">
            <p className="font-bold text-sm md:text-base xl:text-lg">
              B.Sc. in Civil Engineering
            </p>
            <p className="color-secondary text-sm md:text-base xl:text-lg text-end">
              Sylhet Engineering College
            </p>
            <p className="text-xs md:text-sm lg:text-base flex items-center color-secondary gap-2">
              <MdOutlineCalendarMonth />
              <span>2023 - Present</span>
            </p>
          </div>
        </div>

        <div className=" flex flex-col items-center">
          <p className="p-2 bg-gray-500 rounded-full "></p>
          <p className="border h-25 border-gray-500 w-0"></p>
          <p className="p-2 bg-gray-500 rounded-full "></p>
          <p className="border h-25 border-gray-500 w-0"></p>
          <p className="p-2 bg-gray-500 rounded-full "></p>
          <p className="border h-25 border-gray-500 w-0"></p>
          <p className="p-2 bg-gray-500 rounded-full "></p>
          <p className="border h-25 border-gray-500 w-0"></p>
          <p className="p-2 bg-gray-500 rounded-full "></p>
          <p className="border h-25 border-gray-500 w-0"></p>
          <p className="p-2 bg-gray-500 rounded-full "></p>
          <p className="border h-25 border-gray-500 w-0"></p>
        </div>

        <div className=" flex flex-col gap-40 md:gap-37 xl:gap-36 mt-28">
          <div className="flex flex-col gap-2 poppins">
            <p className="font-bold text-sm md:text-base xl:text-lg">
              Web Development
            </p>
            <p className="color-secondary text-sm md:text-base xl:text-lg">
              Self learning
            </p>
            <p className="flex items-center gap-2 color-secondary text-xs md:text-sm xl:text-base">
              <MdOutlineCalendarMonth />
              <span>12|02|2024 - 24|08|2024</span>
            </p>
          </div>

          <div className="flex flex-col gap-2 poppins">
            <p className="font-bold text-sm md:text-base xl:text-lg">
              Front End Development
            </p>
            <p className="color-secondary text-sm md:text-base xl:text-lg">
              Self learning
            </p>
            <p className="flex items-center gap-2 color-secondary text-xs md:text-sm xl:text-base">
              <MdOutlineCalendarMonth />
              <span>24|08|2024 - 18|03|2025</span>
            </p>
          </div>

          <div className="flex flex-col gap-2 poppins">
            <p className="font-bold text-sm md:text-base xl:text-lg">
              Back End Development
            </p>
            <p className="color-secondary text-sm md:text-base xl:text-lg">
              Self learning
            </p>
            <p className="flex items-center gap-2 color-secondary text-xs md:text-sm xl:text-base">
              <MdOutlineCalendarMonth />
              <span>18|03|2025 - Present</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Qualification