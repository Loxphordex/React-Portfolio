import React, { useRef, useState } from 'react'
import './Gallery.css'

export default function Gallery({
  name,
  images
}) {
  const [isMouseDown, setIsMouseDown] = useState(false)
  const [startX, setStartX] = useState(null)
  const [scrollLeft, setScrollLeft] = useState(null)
  const galleryRef = useRef(null)

  function startDragging(e) {
    setIsMouseDown(true)
    setStartX(e.pageX - galleryRef.current.offsetLeft)
    setScrollLeft(galleryRef.current.scrollLeft)
  }

  function stopDragging(e) {
    setIsMouseDown(false)
  }

  function horizontalScroll(e) {
    e.preventDefault()
    if (!isMouseDown) return

    const x = e.pageX - galleryRef.current.offsetLeft
    const scroll = x - startX
    galleryRef.current.scrollLeft = scrollLeft - scroll
  }

  return (
    <div
      className={`${name}-gallery gallery-area`}
      ref={galleryRef}
      onMouseDown={startDragging}
      onMouseUp={stopDragging}
      onMouseLeave={stopDragging}
      onMouseMove={horizontalScroll}>
      {images && images.map(image => {
        return(
          <img src={image} alt={`${name}-gallery-img`} key={image} />
        )
      })}
    </div>
  )
}