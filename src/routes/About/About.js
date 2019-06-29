import React from 'react'
import './About.css'

export default class About extends React.Component {

  state = {
    aboutHidden: '',
    aboutActive: 'about-active',
    skillsHidden: 'hidden',
    skillsActive: 'about-inactive'
  }

  handleAboutTab = () => {
    this.setState({ 
      aboutHidden: '',
      aboutActive: 'about-active',
      skillsHidden: 'hidden',
      skillsActive: 'about-inactive'
    })
  }

  handleSkillsTab = () => {
    this.setState({ 
      aboutHidden: 'hidden',
      aboutActive: 'about-inactive',
      skillsHidden: '',
      skillsActive: 'about-active'
    })
  }
  
  render() {
    const { aboutHidden, aboutActive, skillsHidden, skillsActive } = this.state

    return (
      <div className='about-me-container'>

        <section className='split-1'/>
        <section className='split-2'/>

        <div className='about-main'>

          <h2 className={`about-head ${aboutActive}`} id='about-head'
            onClick={() => this.handleAboutTab()}>ABOUT</h2>

          <h2 className={`about-head skills-head ${skillsActive}`} id='skills-head'
            onClick={() => this.handleSkillsTab()}>SKILLS</h2>

          <div className={`about-container about-outer-border ${aboutHidden}`} id='about'>
            <section className='about-desc'>
                <p>I'm in Seattle, WA. My passion for building and creativity comes from watching something grow out of nothing.</p>
    
                <p>Coding is a creative medium. I love to make things both functional and beautiful.</p>
    
                <p>In my childhood I spent my days building lego sets, or writing, or drawing.</p>
    
                <p>These things all lend themselves to coding; whether it's assembling a project bit by bit, conceptualizing app structure, or following instruction to a tee.</p>
            </section>
          </div>

          <div className={`skills-container about-outer-border ${skillsHidden}`} id='skills'>
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