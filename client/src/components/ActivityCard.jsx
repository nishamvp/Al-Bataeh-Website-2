import React from 'react'

const ActivityCard = () => {
  return (
    <div className="flex flex-col items-center bg-primary font-dm-sans font-bold gap-4 max-w-96">
      <img className="" src="activity.jpg" alt="" />
      <h2 className=" text-tertiary text-xl">Drawing Contest for kids</h2>
      <button className="bg-tertiary text-primary w-full py-2">
        READ MORE
      </button>
    </div>
  )
}

export default ActivityCard
