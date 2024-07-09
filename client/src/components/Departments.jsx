import React from 'react'

const Departments = () => {
  return (
    <div className="bg-tertiary overflow-hidden">
      <img
        className="w-24 h-24 rounded-b-full -rotate-10"
        src="uaeFlag.png"
        alt="UAE Flag"
      />
      <div className="custom-container">
        <div className='flex flex-col justify-center items-center gap-4'>
            <div className='flex items-center gap-1'>
            <div className=' bg-primary w-[6px] h-[6px] mr-1 '> </div>
            <p className='font-dm-sans font-bold text-quarternary text-sm'>OUR DEPARTMENTS</p>
            </div>
            <h1 className='font-dm-serif text-primary text-5xl'>Explore Municipality Departments</h1>
        </div>
      </div>
    </div>
  )
}

export default Departments
