import React from 'react'
import './About.css'

export default class About extends React.Component {
  
  render() {
    const { portrait } = this.props
    return (
      <div className='about-me-container'>

        <img className='about-portrait' src={portrait} alt='Silas Hallahan' />

        <div className='contact-links'>
          <a href='mailto:silasishallahan@gmail.com'><i className='far fa-envelope'></i></a>
          <a href='https://github.com/Loxphordex' target='_blank' rel='noopener noreferrer'><i className='fab fa-github-square'></i></a>
          <a href='https://www.linkedin.com/in/silashallahan/' target='_blank' rel='noopener noreferrer'><i className='fab fa-linkedin'></i></a>
        </div>

        <div className='about-info'>
          <p>I'm in Seattle, WA. My passion for building and creativity comes from watching something grow out of nothing.</p>
          <p>I believe coding is a creative medium. I love to make things both functional and beautiful.</p>
          <p>In my childhood I spent my days building lego sets, or writing, or drawing.</p>
          <p>These things all lend themselves to coding; whether it's assembling a project bit by bit, conceptualizing app structure, or following instruction to a tee.</p>
        </div>

        <div className='hl-container'>
          <div className='hl' />
        </div>

        <div className='about-skills'>
          <div className='skills-section skills-front-end'>
            <h2>Front End</h2>
            <ul>
              <li>
                <i className='devicon-react-original'></i>
                <p>React</p>
              </li>

              <li>
                <i className='devicon-javascript-plain'></i>
                <p>JavaScript</p>
              </li>

              <li>
                <i class="devicon-typescript-plain"></i>
                <p>TypeScript</p>
              </li>

              <li>
                <i className='devicon-html5-plain'></i>
                <p>HTML5</p>
              </li>

              <li>
                <i className='devicon-css3-plain'></i>
                <p>CSS3</p>
              </li>

              <li>
                <i class="devicon-d3js-plain"></i>
                <p>D3</p>
              </li>

              <li>
                <i className='devicon-jquery-plain-wordmark'></i>
                <p>jQuery</p>
              </li>
            </ul>
          </div>

          <div className='skills-section skills-back-end'>
            <h2>Back End</h2>
            <ul>
              <li>
                <i class="devicon-csharp-plain"></i>
                <p>C#</p>
              </li>

              <li>
                <i className='devicon-express-original'></i>
                <p>ExpressJS</p>
              </li>

              <li>
                <i className='devicon-postgresql-plain'></i>
                <p>PostgreSQL</p>
              </li>

              <li>
                <i className='devicon-mocha-plain'></i>
                <p>Mocha</p>
              </li>

              <li>
                <i className='devicon-amazonwebservices-original'></i>
                <p>AWS</p>
              </li>
            </ul>
          </div>

          <div className='skills-section skills-dev-tools'>
            <h2>Dev Tools</h2>
            <ul>
              <li>
                <i className='devicon-nodejs-plain'></i>
                <p>NodeJS</p>
              </li>

              <li>
                <i className='devicon-heroku-original'></i>
                <p>Heroku</p>
              </li>

              <li>
                <i class="devicon-git-plain"></i>
                <p>Git</p>
              </li>

              <li>
                <i class="devicon-visualstudio-plain"></i>
                <p>Visual Studio</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}