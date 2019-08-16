import React from 'react'
import './Gallery.css'

export default class Gallery extends React.Component {
  render() {
    const { name, images } = this.props
    return(
      <div className={`${name}-gallery gallery-area`}>
        {images && images.map(image => {
          return(
            <img src={image} alt={`${name}-gallery-img`} key={image} />
          )
        })}
      </div>
    )
  }
}