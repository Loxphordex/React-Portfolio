import React from 'react'
import happy from '../../../images/happy.png'
import miMoodMobile from '../../../images/miMood-newEntry.png'
import './MiMood.css'

export default class MiMood extends React.Component {
  render() {
    return(
      <div id='miMood' className='project-wrapper collapsed'
        onClick={(event) => this.props.toggleProjectInfo(event)}>

        <div className='project miMood'>
          <p>MIMOOD</p>
        </div>

        <div className='project-info'>
          <div className='info-background'>
            <div className='img-container miMood-img-container'>
              <img src={happy} alt='miMood' className='miMood-image' />
              <div  className='vl vl3' />
              <img src={miMoodMobile} alt='miMood-mobile' className='miMood-mobile' />
              <div  className='vl vl4' />
            </div>

            <div className='project-links miMood-links'>
              <button className='tech miMood-tech'>T E C H
                <div className='tech-info'>
                  <h3>Front End</h3>
                  <p>Javascript, React, Recharts</p>

                  <h3>Back End</h3>
                  <p>Express, PostgreSQL</p>

                </div>
              </button>
              <a href='https://alt-states-mimood.now.sh/' 
              target='_blank' rel='noopener noreferrer'>Live App</a>
              <a href='https://github.com/thinkful-ei-bee/Altered-States-Capstone' 
              target='_blank' rel='noopener noreferrer'>GitHub</a>
            </div>

            <div className='info-container miMood-info'>
              <h2 className='miMood-title'>miMood</h2>
              <h2 className='miMood-purple'>journal</h2>
              <div className='hl hl1' />
            
              <div className='p-container mm-p'>
                <p>Track your emotions using AI. 
                    Users can submit written entries and selifes, and AI systems will
                    analyze the input.</p>
                <p>This allows for a deeper understanding of both your own mood, 
                    and of how AI interacts with human emotion.</p>
              </div>

            </div>
            <div className = 'vl v2 mv2' />

          </div>
        </div>
      </div>
    )
  }
}