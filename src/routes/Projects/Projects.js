import React from 'react'

// STYLES
import './Projects.css'
import './ProjectInfo.css'
import '../../components/Project/Project.css'
import './ProjectDetails.css'

// IMAGES
import quoterLabel from '../../images/quoter-label.png'
import quoterMobile from '../../images/quoter-mobile.png'
import happy from '../../images/happy.png'
import newEntry from '../../images/miMood-newEntry.png'
import bookmarksWide from '../../images/bookmarks-wide.png'
import bookmarksMobile from '../../images/bookmarks-mobile.png'

import Project from '../../components/Project/Project'

export default class Projects extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentView: 'quoter'
    }
  }

  setCurrentView = (name) => {
    this.setState({ currentView: name })
  }

  render() {
    const { currentView } = this.state
    return (
        <div className='projects-container'>
        
          <div className='projects-overview'>
            <h2>PROJECTS</h2>
            <section className='pro-dec-1' />
          </div>
  
          <div className='projects-list'>

            <Project 
              first={true}
              name='quoter'
              title='Quoter'
              photo={quoterLabel}
              mobilePhoto={quoterMobile}
              frontEnd='Javascript, React'
              backEnd='Express, PostgreSQL'
              liveLink='https://loxphordex-quoter-client.now.sh/'
              repoLink='https://github.com/Loxphordex/silas-capstone-client'
              paragraph1='A journal app that scans what you write, 
                and returns relevant quotes to spark inspiration.'
              paragraph2='Discover new authors as well as new perspectives.'
              last=''
              setCurrentView={this.setCurrentView}
              currentView={currentView}
            />

            <Project 
              first={false}
              name='miMood'
              title='miMood'
              photo={happy}
              mobilePhoto={newEntry}
              frontEnd='Javascript, React, Recharts'
              backEnd='Express, PostgreSQL'
              liveLink='https://alt-states-mimood.now.sh/'
              repoLink='https://github.com/thinkful-ei-bee/Altered-States-Capstone'
              paragraph1='Track your emotions using AI. 
                Users can submit written entries and selifes, and AI systems will
                analyze the input.'
              paragraph2='This allows for a deeper understanding of both your own mood, 
                and of how AI interacts with human emotion.'
              last=''
              setCurrentView={this.setCurrentView}
              currentView={currentView}
            />

            <Project 
              first={false}
              name='bookmarks'
              title='Bookmarks'
              photo={bookmarksWide}
              mobilePhoto={bookmarksMobile}
              frontEnd='Javascript, jQuery'
              backEnd=''
              liveLink='https://loxphordex.github.io/Bookmarks/'
              repoLink='https://github.com/Loxphordex/Bookmarks'
              paragraph1='This was the first Javascript project I worked on. 
                It was a collaberative, two-day assignment that drilled us 
                on jQuery.'
              paragraph2='The app simply keeps a record of your bookmarks, 
                and lets you filter them by rating.'
              last='last'
              setCurrentView={this.setCurrentView}
              currentView={currentView}
            />
          </div>
        </div>
    ) 
  }
}