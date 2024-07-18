import React from 'react'
import DetailsCard from './DetailsCard'

const Details = () => {
  return (
    <div className="bg-tertiary relative">
      <div className="custom-container">
        <div className="flex flex-wrap justify-center gap-4 items-center my-14">
          <DetailsCard />
          <DetailsCard />
          <DetailsCard />
          <DetailsCard />
        </div>
      </div>
    </div>
  )
}

export default Details
