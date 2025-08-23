import React, { useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { myWorks } from '../assets/portfolioData';

const ViewWorks = () => {
  const {name}=useParams()
  const work = myWorks.find(work=>work.name.split(' ').join('').toLowerCase()===name.split('-').join(''))

  useEffect(()=>{
    scrollTo({top:0,behavior:"smooth"})
  },[])

  return (
    <div className="bg-primary color-primary">
      <div className="px-2 border-b border-primary md:px-10 xl:px-30">
        <div className="border-r border-l border-primary py-10"></div>
      </div>

      <div className=" border-primary px-2 md:px-10 xl:px-30">
        <div className=" border-l border-primary grid md:grid-cols-[45%50%] justify-between items-center ">
          <p className=" border-r border-b md:border-b-0 border-primary outfit font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl pl-5 h-full flex items-center py-5  ">
            {work.name}
          </p>
          <p className="border-r md:border-l border-primary flex items-center px-5 py-5 text-sm md:text-base xl:text-lg">
            {work.shortDescription}
          </p>
        </div>
      </div>

      <div className="border-t border-b border-primary px-2 md:px-10 xl:px-30">
        <div className="border-l border-r border-primary grid grid-cols-[60%40%] md:grid-cols-[70%25%] justify-between">
          <div className="flex flex-wrap border-r border-primary gap-5 px-5 items-center py-5 ">
            {work.technology.map((tech, index) => (
              <p key={index} className="font-semibold xl:text-lg text-sm md:text-base">
                {tech}
              </p>
            ))}
          </div>
          <NavLink className="md:border-l py-5 md:py-0 border-primary flex items-center justify-center px-5">
            <span className="border border-orange-500 rounded-full px-4 py-1.5 font-bold poppins hover:bg-orange-500 hover:text-white transition-all duration-300 text-sm md:text-base xl:text-lg">
              Live Preview
            </span>
          </NavLink>
        </div>
      </div>

      <div className="px-2 md:px-10 xl:px-30">
        <div className="p-5 border-l border-r border-primary">
          <img
            className="aspect-auto object-cover rounded"
            src={work.image}
            alt=""
          />
        </div>
      </div>

      <div className="border-t border-b border-primary px-2 md:px-10 xl:px-30  ">
        <div className="border-l border-r border-primary grid md:grid-cols-[30%66%] justify-between pb-15 md:pb-0 ">
          <div className="border-b md:border-b-0 md:border-r border-primary h-full flex items-center">
            <p className="px-5 font-bold text-xl poppins py-5 md:py-0 md:text-2xl lg:text-3xl xl:text-4xl">What’s included</p>
          </div>

          <div className="md:border-l border-primary flex flex-col gap-10">
            <div className="border-b border-primary">
              <p className="p-5 text-justify poppins text-sm md:text-base xl:text-lg">
                {work.longDescription[0].description}
              </p>
            </div>

            <div className="grid md:grid-cols-[49%49%] border-t border-primary justify-between pb-10 pt-5 ">
              {Object.entries(work.longDescription[0])
                .filter(([key]) => key !== "description")
                .map(([key, value]) => (
                  <p key={key} className=" px-2 text-justify poppins text-sm md:text-base xl:text-lg ">
                    <span className="font-bold outfit">
                      {key.split("_").join(" ")} -{" "}
                    </span>
                    {value}
                  </p>
                ))}
            </div>
          </div>
        </div>
      </div>

      <div className="px-2 md:px-10 xl:px-30 ">
        <div className="border-r border-l border-primary grid md:grid-cols-[30%66%] justify-between py-5 md:py-0">
          <p className="md:border-r border-primary flex items-center px-5 font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl poppins">
            Screenshots
          </p>
          <div className="md:border-l border-primary columns-1 md:columns-2 gap-5 p-5">
            {work.screenshots.map((data, index) => (
              <img
              key={index}
                className="mb-5 rounded aspect-auto object-cover"
                src={data}
                alt=""
              />
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-b border-primary px-2 md:px-10 xl:px-30">
        <div className="border-l border-r border-primary grid md:grid-cols-[30%66%] justify-between py-5 md:py-0">
          <p className="md:border-r border-primary flex items-center font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl poppins px-5">
            The technology
          </p>
          <div className="md:border-l border-primary py-5 flex flex-col gap-5">
            <div className="flex items-center ">
              <p className="p-5 text-sm md:text-base xl:text-lg">
                Our templates are thoughtfully crafted with the latest and
                greatest versions of the tools we love so that they are easy to
                maintain, and actually fun to work on
              </p>
            </div>
            <div className="grid grid-cols-[49%49%] gap-[2%] p-5">
              {
                work.technology.map((tech,i)=>(
                  <p key={i} className='py-2 font-bold outfit text-sm md:text-base xl:text-lg'>{tech}</p>
                ))
              }

            </div>
          </div>
        </div>
      </div>

      <div className="px-2 md:px-10 xl:px-30">
        <div className="border-l border-r border-primary py-10"></div>
      </div>
    </div>
  );
}

export default ViewWorks