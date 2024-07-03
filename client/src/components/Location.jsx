import React from 'react'
import LocationIcon from './vectors/LocationIcon'
import { location } from '../constants/topbar'

const Location = () => {
  return (
    <div className="flex gap-3  items-center ">
      <LocationIcon />
      <p>{location}</p>
    </div>
  )
}

export default Location
