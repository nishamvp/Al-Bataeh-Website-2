import React from 'react'
import BataehBrand from './BataehBrand'
import NavBarLinks from './NavBarLinks'
import SearchSection from './SearchSection'

const NavBar = () => {
  return (
    <div className="bg-primary h-28 flex flex-col justify-center">
      <div className="custom-container font-dm-sans flex items-center justify-between ">
        <BataehBrand />
        <NavBarLinks />
        <SearchSection />
      </div>
    </div>
  )
}

export default NavBar
