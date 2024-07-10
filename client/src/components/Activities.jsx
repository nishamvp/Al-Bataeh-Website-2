import React from 'react'
import ActivityCard from './ActivityCard'

const Activities = () => {
  return (
    <div className="bg-secondary ">
      <div className="custom-container ">
        <div className="flex flex-col items-center gap-6 my-16 ">
          <div className="flex items-center gap-1">
            <div className=" bg-tertiary w-[6px] h-[6px] mr-1 "> </div>
            <p className="text-sm font-bold font-dm-sans text-quarternary">
              OUR DEPARTMENTS
            </p>
          </div>
          <h1 className="text-5xl font-dm-serif text-tertiary">
            Upcoming activities & events schedule
          </h1>
          <div className='flex flex-wrap gap-4 mt-6 '>
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activities
