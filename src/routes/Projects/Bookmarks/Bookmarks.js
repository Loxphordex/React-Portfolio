import React from 'react'
import mobile from '../../../images/bookmarks-mobile.png'
import wide from '../../../images/bookmarks-wide.png'
import './Bookmarks.css'

export default class Bookmarks extends React.Component {
  
  render() {
    return(
      <div id='bookmarks' className='project-wrapper collapsed'
        onClick={(event) => this.props.toggleProjectInfo(event)}>
        <div className='project bookmarks'>
          <p>BOOKMARKS</p>
        </div>
        <div className='project-info end-project'>
          <div className='info-background'>

            <div className='img-container bookmarks-img-container'>
              <img src={wide} alt='bookmarks-wide' className='bookmarks-wide' />
              <div className='vl bm-vl1' />
              <img src={mobile} alt='bookmarks-mobile' className='bookmarks-mobile' />
            </div>
            
            <div className='vl bm-vl' />

            <div className='info-container bookmarks-info'>
              <h2 className='bookmarks-title'>Bookmarks</h2>

              <div className='p-container bkmrk-p'>
                <p>
                  This was the first Javascript project I worked on. 
                  It was a collaberative, two-day assignment that drilled us 
                  on jQuery. 
                </p>

                <p>
                  The app simply keeps a record of your bookmarks, 
                  and lets you filter them by rating.
                </p>
              </div>

              <div className='project-links bookmarks-links'>

                <button className='tech bookmarks-tech'>T E C H
                  <div className='tech-info'>
                    <h3>Front End</h3>
                    <p>Javascript, jQuery</p>
                  </div>
                </button>

                <a href='https://loxphordex.github.io/Bookmarks/'
                  target='_blank' rel='noopener noreferrer'>Live App</a>
                <a href='https://github.com/Loxphordex/Bookmarks'
                  target='_blank' rel='noopener noreferrer'>GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}