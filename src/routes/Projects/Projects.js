import React from 'react'
import quoterLanding from '../../images/quoter-landing.png'
import './Projects.css'

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
      element.setAttribute('class', `project-wrapper`)
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



            <div id='quoter' className='project-wrapper' 
              onClick={(event) => this.toggleProjectInfo(event)}>

              <div className='project quoter'>
                <p>QUOTER</p>
              </div>

              <div className='project-info'>
                <div className='info-background'>
                  
                </div>
              </div>
            </div>


            <div id='miMood' className='project-wrapper'
              onClick={(event) => this.toggleProjectInfo(event)}>

              <div className='project miMood'>
                <p>MIMOOD</p>
              </div>

              <div className='project-info'>
                <div className='info-background'>
                  
                </div>
              </div>
            </div>


            <div id='bookmarks' className='project-wrapper'
              onClick={(event) => this.toggleProjectInfo(event)}>

              <div className='project bookmarks'>
                <p>BOOKMARKS</p>
              </div>

              <div className='project-info'>
                <div className='info-background'>
                  
                </div>
              </div>
            </div>

          </div>
        </div>
    ) 
  }
}