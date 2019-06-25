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
            <img src={happy} alt='miMood' className='miMood-image' />
            <div  className='vl vl3' />
            <img src={miMoodMobile} alt='miMood-mobile' className='miMood-mobile' />
            <div  className='vl vl4' />

            <div className='project-links miMood-links'>
              <a href='https://loxphordex-quoter-client.now.sh/' 
              target='_blank' rel='noopener noreferrer'>Live App</a>
              <a href='https://github.com/Loxphordex/silas-capstone-client' 
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