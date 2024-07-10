import React from 'react'
import DepartmentCard from './DepartmentCard'

const Departments = () => {
  return (
    <div className="overflow-hidden bg-tertiary">
      <img
        className="w-32 h-24 rounded-b-3xl -rotate-10"
        src="uaeFlag.png"
        alt="UAE Flag"
      />
      <div className='custom-container'>
      <div className="flex flex-col items-center gap-6">
        <div className="flex items-center gap-1">
          <div className=" bg-primary w-[6px] h-[6px] mr-1 "> </div>
          <p className="text-sm font-bold font-dm-sans text-quarternary">
            OUR DEPARTMENTS
          </p>
        </div>
        <h1 className="text-5xl font-dm-serif text-primary">
          Explore Municipality Departments
        </h1>
        <div className=" flex flex-wrap items-center justify-center gap-5 my-14">
          <DepartmentCard />
          <DepartmentCard />
          <DepartmentCard />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Departments
