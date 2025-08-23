import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext';

const EngTools = () => {
   const { engTools } = useContext(AppContext);
  return (
    <div>
      <div>
        <ul className="flex flex-wrap justify-center gap-3">
          {engTools.map((data, index) => (
            <li
              key={index}
              className="bg-secondary px-6 py-4 rounded color-primary flex flex-col items-center gap-1 justify-center"
            >
              <p className="font-bold text-sm md:text-base xl:text-lg">
                {data.icon}
              </p>
              <p className="text-xs md:text-sm xl:text-base">{data.level}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default EngTools