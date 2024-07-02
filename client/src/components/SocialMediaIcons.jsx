import React from 'react'
import FacebookIcon from './vectors/FacebookIcon'
import InstagramIcon from './vectors/InstagramIcon'
import LinkedInIcon from './vectors/LinkedInIcon'
import TwitterIcon from './vectors/TwitterIcon'

const SocialMediaIcons = () => {
  return (
    <div className="flex items-center gap-5">
      <FacebookIcon />
      <InstagramIcon />
      <LinkedInIcon />
      <TwitterIcon/>
    </div>
  )
}

export default SocialMediaIcons
