import React from 'react'
import { MdArrowRight } from "react-icons/md";
import { FaUserTie, FaProjectDiagram, FaSmile } from "react-icons/fa";



const CardSection = () => {



const cardData = [
  {
    data: "02+",
    title: "Years of Experience",
    icon: <FaUserTie />,
  },
  {
    data: "50+",
    title: "Completed Projects",
    icon: <FaProjectDiagram />,
  },
  {
    data: "40+",
    title: "Happy Client",
    icon: <FaSmile />,
  },
  ];
  return (
    <div className="mx-2 md:mx-10 xl:mx-20">
      <div className="flex flex-col md:flex-row gap-5 md:justify-evenly py-10">
        {cardData.map((card, i) => (
          <div
            key={i}
            className="bg-secondary rounded p-10 shadow-md hover:scale-102 mx-15 md:mx-0 "
          >
            <ul className="flex justify-between gap-6 items-center">
              <li className=" text-3xl text-orange-500">
                {card.icon}
              </li>
              <li className="text-3xl font-black text-orange-500 poppins text-center">
                {card.data} <br />
                <span className="color-primary text-2xl md:text-2xl font-bold outfit">
                  {card.title}
                </span>
              </li>
              <li className="text-xl font-bold color-secondary">
                <MdArrowRight />
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardSection