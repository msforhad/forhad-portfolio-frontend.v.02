import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

const TechSkilled = () => {
  const {techSkilled}=useContext(AppContext)
  return (
    <div>
      <div>
        <ul className='flex flex-wrap gap-3 justify-center'>
          {
            techSkilled.map((data,index)=>(
              <li key={index} className='bg-secondary px-6 py-4 rounded flex flex-col items-center justify-center gap-1 color-primary outfit'>
                <p className='text-3xl md:text-4xl xl:text-5xl'>{data.icon}</p>
                <p className='font-bold text-sm md:text-base xl:text-lg'>{data.name}</p>
                <p className='text-xs md:text-sm xl:text-base'>{data.level}</p>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default TechSkilled