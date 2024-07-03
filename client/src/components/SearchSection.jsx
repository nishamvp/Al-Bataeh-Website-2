import React from 'react'
import { navbarButton } from '../constants/navbar'
import Lens from './vectors/Lens'

const SearchSection = () => {
  return (
    <div className="flex items-center gap-8">
          <Lens />
          <button className="bg-quarternary text-primary font-bold px-14 py-2">
            {navbarButton}
          </button>
        </div>
  )
}

export default SearchSection