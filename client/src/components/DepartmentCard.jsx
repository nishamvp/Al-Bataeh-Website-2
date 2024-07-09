import React from 'react'
import ProfileIcon from './vectors/ProfileIcon'

const DepartmentCard = () => {
  return (
    <div className="flex w-1/4 flex-col gap-5 px-5 py-8 font-dm-sans bg-[#0b2d2a]  hover:outline outline-1 outline-quarternary">
      <ProfileIcon />
      <h1 className="text-xl font-bold text-primary hover:animate-text-quarternary">
        Job & Unemployement
      </h1>
      <p className="text-[#a9b5b5]">
        Write a short descip onthat ipsum loreum sed ameture hot
      </p>
      <h3 className="mb-4 font-bold text-primary">READ MORE</h3>
    </div>
  )
}

export default DepartmentCard
