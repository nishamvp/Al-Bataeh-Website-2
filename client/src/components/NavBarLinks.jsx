import React from 'react'
import { navbarLinks } from '../constants/navbar'

const NavBarLinks = () => {
  return (
    <div className="text-sm text-gray font-semibold">
      <ul className="flex gap-16">
        {navbarLinks.map((link) => (
          <li>{link.text}</li>
        ))}
      </ul>
    </div>
  )
}

export default NavBarLinks
