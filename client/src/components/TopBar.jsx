import React from 'react'
import Location from './Location'
import MailContact from './MailContact'
import SocialMediaIcons from './SocialMediaIcons'
import Sections from './Sections'

const TopBar = () => {
  return (
    <div className="bg-tertiary ">
      <div className="custom-container text-sm font-dm-sans  text-primary">
        <div className="flex items-center justify-between">
          <div className="flex gap-8">
            <Location />
            <MailContact />
          </div>
          <div className="flex gap-5 items-center">
            <Sections />
            <SocialMediaIcons />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar
