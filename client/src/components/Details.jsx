import React, { useEffect, useRef, useState } from 'react'
import DetailsCard from './DetailsCard'

const Details = () => {
  const cardRef = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log(entry)
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect() 
        }
      },
      { threshold: 0.1 }, 
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

  return (
    <div className="bg-tertiary relative">
      <div className="custom-container">
        <div
          ref={cardRef}
          className={`flex flex-wrap justify-center gap-4 items-center my-14 ${
            isInView ? 'animate-details-card-slideup' : ''
          }`}
        >
          <DetailsCard />
          <DetailsCard />
          <DetailsCard />
          <DetailsCard />
        </div>
      </div>
    </div>
  )
}

export default Details
