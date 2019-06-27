import React from 'react'
import './Contact.css'

export default class Contact extends React.Component {
  render() {
    return (
      <div className='contact-container'>
        <div className='contact-dec' />

        <div className='contact-info'>
          <p>silasishallahan@gmail.com</p>
          <a href='https://www.linkedin.com/in/silas-hallahan-970750179/'
            target='_blank' rel='noopener noreferrer'>Linkedin</a>
          <a href='https://github.com/Loxphordex'
            target='_blank' rel='noopener noreferrer'>GitHub</a>
        </div>
      </div>
    )
  }
}