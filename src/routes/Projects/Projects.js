import React from 'react'
import './Projects.css'
import './ProjectInfo.css'
import Quoter from './Quoter/Quoter'
import MiMood from './MiMood/MiMood'

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

            <Quoter toggleProjectInfo={this.toggleProjectInfo} />

            <MiMood toggleProjectInfo={this.toggleProjectInfo} />


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