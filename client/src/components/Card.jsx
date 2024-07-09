import React, { useState } from 'react'
import OpenBookIcon from './vectors/OpenBookIcon'

const Card = () => {
  const [hover, setHover] = useState(false)
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="bg-primary flex flex-col px-12 py-8 items-center gap-5 shadow-sm card-hover"
    >
      <div
        className={`w-28 h-28 rounded-full flex justify-center items-center ${
          hover ? 'bg-[#de724b]' : 'bg-secondary'
        }`}
      >
        <OpenBookIcon hover={hover} />
      </div>
      <h1
        className={`font-dm-sans font-bold ${
          hover ? 'text-primary' : 'text-[#101644]'
        } `}
      >
        EDUCATION
      </h1>
    </div>
  )
}

export default Card
