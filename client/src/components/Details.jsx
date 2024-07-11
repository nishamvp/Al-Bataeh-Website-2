import React from 'react'
import DepartmentCard from './DepartmentCard'

const Details = () => {
  return (
    <div className="bg-tertiary relative">
      <div className="relative">
        <img
          className="w-full object-cover outline-filter"
          src="Full view Albataeh.png"
          alt=""
        />
        <div className="color-overlay"></div>
        <h1 className="absolute z-10 top-6 w-full text-center text-primary font-dm-sans font-bold">absolute</h1>
      </div>
    </div>
  )
}

export default Details
