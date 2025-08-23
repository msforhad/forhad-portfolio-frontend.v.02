import React, { useContext, useEffect } from 'react'
import TechSkilled from "../components/Skills/TechSkilled";
import TechTools from "../components/Skills/TechTools";
import EngSkilled from '../components/Skills/EngSkilled';
import EngTools from '../components/Skills/EngTools';
import { AppContext } from '../context/AppContext';

const Skills = () => {
  const { engSkills, setEngSkills, techSkills, setTechSkills } =
    useContext(AppContext);

  useEffect(()=>{
    scrollTo({top:0,behavior:"smooth"})
  },[])

    


  return (
    <div className="bg-primary">
      <div className="mx-2 md:mx-10 lg:mx-20 xl:mx-30 flex flex-col justify-between gap-30 pt-20 py-30">
        {/* 1st section */}
        <div className=" grid grid-cols-1 md:grid-cols-[10%40%44%] gap-10 md:gap-[2%]">
          <div className="hidden md:flex flex-col gap-10 items-center justify-center">
            <p className="rotate-90 font-bold uppercase color-primary text-sm md:text-base xl:text-lg  ">
              my skills
            </p>
            <p className="border h-20 w-0 color-primary "></p>
          </div>

          <div className="flex flex-col gap-10 justify-center items-center md:items-start">
            <div className="flex flex-col items-center md:items-start gap-5 font-bold color-primary outfit">
              <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                What My
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                <span className=" text-orange-500 ">Programming</span> Skills
                Included?
              </p>

              <p className="roboto color-secondary text-center md:text-justify text-sm md:text-base xl:text-lg">
                I develop simple,intuitive and responsive user interface that
                helps users get thing done with less effort and time with those
                technologies
              </p>
            </div>

            <div className="flex">
              <div className="flex gap-5 items-center  bg-secondary rounded-full py-2.5 px-5 justify-center relative">
                <button
                  onClick={() => setTechSkills("techSkills")}
                  className={` font-bold poppins color-primary z-10 text-sm md:text-base xl:text-lg cursor-pointer`}
                >
                  Skills
                </button>

                <button
                  onClick={() => setTechSkills("techTools")}
                  className={` font-bold poppins color-primary z-10 text-sm md:text-base xl:text-lg cursor-pointer`}
                >
                  Tools
                </button>
                <div
                  className={`${
                    techSkills === "techSkills" ? "left-[5px] xl:left-[6px]" : "xl:right-[5px] right-[6px]"
                  } bg-orange-400 px-7 xl:px-8 rounded-full py-0.5 xl:py-1 text-orange-400 absolute  z-0 `}
                >
                  .
                </div>
              </div>
            </div>
          </div>

          <div>
            {techSkills === "techSkills" ? <TechSkilled /> : <TechTools />}
          </div>
        </div>

        {/* 2nd section */}
        <div className=" grid grid-cols-1 md:grid-cols-[50%35%15%] gap-[5%] md:gap-0">
          <div className="hidden md:flex justify-end mr-10">
            {engSkills === "engSkills" ? <EngSkilled /> : <EngTools />}
          </div>

          <div className="flex flex-col gap-10 justify-center items-center md:items-end">
            <div className="flex flex-col items-center md:items-end gap-5 font-bold color-primary outfit">
              <p className="text-xl md:text-2xl lg:text-3xl xl:4xl">What My</p>
              <p className="text-xl md:text-2xl lg:text-3xl xl:4xl text-end">
                <span className="text-orange-500">Engineering</span> Skills
                Included?
              </p>

              <p className="text-sm  md:text-base xl:text-lg roboto color-secondary text-center md:text-end">
                I develop simple,intuitive and responsive user interface that
                helps users get thing done with less effort and time with those
                technologies
              </p>
            </div>

            <div className="flex">
              <div className="flex gap-5 items-center  bg-secondary rounded-full py-2.5 px-5 relative justify-center">
                <button
                  onClick={() => setEngSkills("engSkills")}
                  className={`color-primary font-bold poppins  z-10 text-sm md:text-base xl:text-lg cursor-pointer`}
                >
                  Skills
                </button>

                <button
                  onClick={() => setEngSkills("engTools")}
                  className={`color-primary font-bold poppins z-10 text-sm md:text-base xl:text-lg cursor-pointer`}
                >
                  Tools
                </button>
                <div
                  className={`${
                    engSkills === "engSkills" ? "left-[6px]" : "right-[7px]"
                  } bg-orange-400 px-7 xl:px-8 rounded-full py-0.5 xl:py-1 text-orange-400 absolute `}
                >
                  .
                </div>
              </div>
            </div>
          </div>

          <div className="md:hidden justify-end">
            {engSkills === "engSkills" ? <EngSkilled /> : <EngTools />}
          </div>

          <div className="hidden md:flex flex-col gap-15 items-center justify-center">
            <p className="rotate-90 tracking-[3px] font-bold uppercase color-primary ">
              my skills
            </p>
            <p className="border-1 h-20 color-primary"></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills