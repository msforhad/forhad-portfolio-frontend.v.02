import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext.jsx';

const Portfolio = () => {
  const navigate=useNavigate()

  const {myWork}=useContext(AppContext)
  const [sliceVal,setSliceVal]=useState(5)

  

  useEffect(()=>{
    scrollTo({top:0,behavior:"smooth"})
  },[])

  return (
    <div className="bg-primary">
      <div className="mx-2 md:mx-10 lg:mx-20 xl:30  py-20">
        <div className="columns-1 md:columns-3 gap-5 ">
          <div className="mb-5 grid md:grid-cols-[30%70%] aspect-auto justify-items-start ">
            <div className="color-secondary flex flex-row md:flex-col items-center  gap-2 md:gap-8 justify-center">
              <p className="md:rotate-90 outfit text-sm md:text-base xl:text-lg ">
                My Work
              </p>
              <p className="border h-0 md:h-15 w-15 md:w-0"></p>
            </div>

            <div className="color-primary flex flex-col gap-5 ">
              <p className="font-bold outfit text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                See My Works Which Will Amaze You!
              </p>
              <p className="poppins text-justify text-sm md:text-base xl:text-lg">
                I develop simple, intuitive and responsive user interface that
                helps users get things done with less effort and time with those
                technologies.
              </p>
            </div>
          </div>

          {myWork
            .slice(0, sliceVal)
            .map((data, index) =>
              (index + 1) % 2 == 0 ? (
                index + 1 == 6 || index + 1 == 8 ? (
                  <img
                    onClick={() =>
                      navigate(
                        `/portfolio/${data.name
                          .split(" ")
                          .join("-")
                          .toLowerCase()}`
                      )
                    }
                    className="aspect-auto object-cover mb-5 rounded cursor-pointer"
                    key={index}
                    src={data.image}
                    alt=""
                  />
                ) : (
                  <img
                    onClick={() =>
                      navigate(
                        `/portfolio/${data.name
                          .split(" ")
                          .join("-")
                          .toLowerCase()}`
                      )
                    }
                    className="aspect-auto object-cover mb-5 rounded cursor-pointer"
                    key={index}
                    src={data.image}
                    alt=""
                  />
                )
              ) : index + 1 == 3 || index + 1 == 7 ? (
                <img
                  onClick={() =>
                    navigate(
                      `/portfolio/${data.name
                        .split(" ")
                        .join("-")
                        .toLowerCase()}`
                    )
                  }
                  className="aspect-auto object-cover mb-5 rounded cursor-pointer "
                  src={data.image}
                  alt=""
                />
              ) : (
                <img
                  onClick={() =>
                    navigate(
                      `/portfolio/${data.name
                        .split(" ")
                        .join("-")
                        .toLowerCase()}`
                    )
                  }
                  className="aspect-auto object-cover mb-5 rounded cursor-pointer"
                  src={data.image}
                  alt=""
                />
              )
            )}

          <div className="aspect-auto text-center ">
            {myWork.length < sliceVal ? (
              ""
            ) : (
              <button
                onClick={() => setSliceVal(sliceVal + 4)}
                className="text-indigo-500 border-b border-indigo-500 font-bold poppins"
              >
                See Work
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio
