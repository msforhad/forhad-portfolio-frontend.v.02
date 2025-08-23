import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

const TechTools = () => {
  const {techTools}=useContext(AppContext)
  return (
    <div>
      <div>
        <ul className="flex flex-wrap  gap-2 justify-center">
          {techTools.map((data, index) => (
            <li
              key={index}
              className="bg-secondary px-6 py-4 rounded gap-1 flex flex-col items-center justify-center color-primary outfit"
            >
              <p className="text-3xl md:text-4xl xl:text-5xl">{data.icon}</p>
              <p className="font-bold text-sm md:text-base xl:text-lg">
                {data.name}
              </p>
              <p className="text-xs md:text-sm xl:text-base">{data.level}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TechTools