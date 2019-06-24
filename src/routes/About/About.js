import React from 'react'
import './About.css'

export default function About() {
  return (
    <div className='about-me-container'>

      <section className='split-1'/>
      <section className='split-2'/>

      <div className='about-main'>

        <h2 className='about-head'>ABOUT</h2>

        <div className='about-outer-border'>
          <section className='about-desc'>
              <p>I'm in Seattle, WA. My passion for building and creativity comes from watching something grow out of nothing.</p>
  
              <p>Coding is a creative medium. I love to make things both functional and beautiful.</p>
  
              <p>In my childhood I spent my days building lego sets, or writing, or drawing.</p>
  
              <p>These things all lend themselves to coding; whether it's assembling a project bit by bit, conceptualizing app structure, or following instruction to a tee.</p>
          </section>
        </div>

        <section className='about-me-decoration' />
        <section className='about-secondary-dec' />
      </div>
    </div>
  )
}