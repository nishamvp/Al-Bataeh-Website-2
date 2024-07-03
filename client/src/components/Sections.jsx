import React from 'react'
import { sections } from '../constants/topbar'

const Sections = () => {
  return (
    <div className="flex gap-4">
      {sections.map((section) => (
        <>
          <p>{section}</p>/
        </>
      ))}
    </div>
  )
}

export default Sections
