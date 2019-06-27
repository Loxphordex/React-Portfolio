import React from 'react'
import './About.css'

export default class About extends React.Component {

  handleAboutTab() {
    const about = document.getElementById('about')
    const skills = document.getElementById('skills')

    const aboutHead = document.getElementById('about-head')
    const skillsHead = document.getElementById('skills-head')

    about.setAttribute('class', 'about-container about-outer-border')
    skills.setAttribute('class', 'skills-container about-outer-border hidden')

    aboutHead.setAttribute('class', 'about-head about-active')
    skillsHead.setAttribute('class', 'about-head skills-head about-inactive' )
  }

  handleSkillsTab() {
    const about = document.getElementById('about')
    const skills = document.getElementById('skills')

    const aboutHead = document.getElementById('about-head')
    const skillsHead = document.getElementById('skills-head')

    about.setAttribute('class', 'about-container about-outer-border hidden')
    skills.setAttribute('class', 'skills-container about-outer-border')

    aboutHead.setAttribute('class', 'about-head about-inactive')
    skillsHead.setAttribute('class', 'about-head skills-head about-active' )
  }
  render() {
    return (
      <div className='about-me-container'>

        <section className='split-1'/>
        <section className='split-2'/>

        <div className='about-main'>

          <h2 className='about-head about-active' id='about-head'
            onClick={() => this.handleAboutTab()}>ABOUT</h2>

          <h2 className='about-head skills-head about-inactive' id='skills-head'
            onClick={() => this.handleSkillsTab()}>SKILLS</h2>

          <div className='about-container about-outer-border' id='about'>
            <section className='about-desc'>
                <p>I'm in Seattle, WA. My passion for building and creativity comes from watching something grow out of nothing.</p>
    
                <p>Coding is a creative medium. I love to make things both functional and beautiful.</p>
    
                <p>In my childhood I spent my days building lego sets, or writing, or drawing.</p>
    
                <p>These things all lend themselves to coding; whether it's assembling a project bit by bit, conceptualizing app structure, or following instruction to a tee.</p>
            </section>
          </div>

          <div className='skills-container about-outer-border hidden' id='skills'>
            <div className='skills about-desc'>
              <h2>Front End</h2>
              <p>HTML, CSS3, Javascript ES6, jQuery, 
                React, Redux, React-Router-Dom, Recharts, Enzyme</p>

              <h2>Back End</h2>
              <p>Node, Express, JSON, REST APIs, PostgreSQL, Knex, JWT</p>

              <h2>Tools and Methods</h2>
              <p>Encryption and Authentication, git, GitHub, Heroku, Mocha and Chai Testing, 
                Mobile Development, Responsive Design</p>
            </div>
          </div>

          <section className='about-me-decoration' />
          <section className='about-secondary-dec' />

        </div>
      </div>
    )
  }
}