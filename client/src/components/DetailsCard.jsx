import React, { useState } from 'react'
import RunningManIcon from './vectors/RunningManIcon'

const DetailsCard = () => {
  const [downCircle, setDownCircle] = useState(false)
  return (
    <div
      onMouseOver={() => setDownCircle(true)}
      onMouseOut={() => setDownCircle(false)}
      className="bg-[#0a2d29] w-1/5 flex flex-col items-center justify-center    "
    >
      <div
        className={`w-32 h-32 rounded-full flex justify-center  ${
          downCircle
            ? ' items-center bg-quarternary top-8 relative'
            : 'items-end  bg-tertiary'
        } `}
      >
        <RunningManIcon hover={downCircle} />
      </div>
      <div className="text-center my-12 font-bold">
        <h1 className="font-dm-serif text-5xl text-primary mb-3">26k</h1>
        <p className="font-dm-sans  text-[#a9b5b5]">People in the city</p>
      </div>
    </div>
  )
}

export default DetailsCard
