import React from 'react'

const ActivityCard = () => {
  return (
    <div className="font-dm-sans font-bold  max-w-96">
      <div className="bg-primary flex flex-col items-center gap-4">
        <div className="overflow-hidden w-full">
          <img
            className="transform transition-transform duration-500 hover:scale-110 w-full object-cover "
            src="activity.jpg"
            alt="Activity"
          />
        </div>
        <h2 className="text-tertiary text-xl hover:underline">Drawing Contest for Kids</h2>
        <button className="bg-tertiary text-primary w-full py-2 mt-2  hover:bg-quarternary transition-colors duration-300">
          READ MORE
        </button>
      </div>
    </div>
  )
}

export default ActivityCard
