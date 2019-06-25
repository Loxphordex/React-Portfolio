import React from 'react'
import { Link } from 'react-router-dom'
import quoterLabel from '../../images/quoter-label.png'
import qouterMobile from '../../images/quoter-mobile.png'
import './Projects.css'
import './ProjectInfo.css'

export default class Projects extends React.Component {

  componentDidMount() {
    setTimeout(() => {
      document.getElementById('quoter').setAttribute('class', 'project-wrapper expanded')
    }, 50)
  }

  toggleProjectInfo(event) {

    const element = document.getElementById(event.target.id)

    if (!element) return;

    const isExpanded = element.classList.contains('expanded')

    // Here the class "expanded" is being toggled for each project
    // This displays or colapses the info panel
    if(!isExpanded) {
      console.log('has not')
      element.setAttribute('class', `project-wrapper expanded`)
      return;
    }

    if(isExpanded) {
      console.log('has')
      element.setAttribute('class', `project-wrapper collapsed`)
      return;
    }
  }

  render() {
    return (
        <div className='projects-container'>
        
          <div className='projects-overview'>
            <h2>PROJECTS</h2>
            <section className='pro-dec-1' />
          </div>
  
          <div className='projects-list'>



            <div id='quoter' className='project-wrapper collapsed' 
              onClick={(event) => this.toggleProjectInfo(event)}>

              <div className='project quoter'>
                <p>QUOTER</p>
              </div>

              <div className='project-info'>
                <div className='info-background'>
                  <img src={quoterLabel} alt='quoter' className='quoter-project-image' />
                  <img src={qouterMobile} alt='quoter-mobile' className='quoter-mobile' />
                  <div  className='vl vl1' />

                  <div className='info-container'>
                    <h2 className='quoter-title'>Quoter</h2>
                    <div className='hl hl1' />
                    <p>A journal app that scans what you write, 
                      and returns relevant quotes to spark inspiration.</p>
                    <p>Discover new authors as well as new perspectives.</p>
                    <div className='project-links quoter-links'>
                      <a href='https://loxphordex-quoter-client.now.sh/' 
                        target='_blank' rel='noopener noreferrer'>Live App</a>
                      <a href='https://github.com/Loxphordex/silas-capstone-client' 
                        target='_blank' rel='noopener noreferrer'>GitHub</a>
                    </div>

                  </div>
                  <div className = 'vl v2' />

                </div>
              </div>
            </div>


            <div id='miMood' className='project-wrapper collapsed'
              onClick={(event) => this.toggleProjectInfo(event)}>

              <div className='project miMood'>
                <p>MIMOOD</p>
              </div>

              <div className='project-info'>
                <div className='info-background'>
                  
                </div>
              </div>
            </div>


            <div id='bookmarks' className='project-wrapper collapsed'
              onClick={(event) => this.toggleProjectInfo(event)}>

              <div className='project bookmarks'>
                <p>BOOKMARKS</p>
              </div>

              <div className='project-info end-project'>
                <div className='info-background'>
                  
                </div>
              </div>
            </div>

          </div>
        </div>
    ) 
  }
}