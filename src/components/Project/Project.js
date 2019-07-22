import React from 'react'

export default class Project extends React.Component {
  state = {
    view: 'collapsed',
    last: this.props.last,
    projectName: this.props.name,
    currentView: this.props.currentView,
  }

  componentDidMount = () => {
    if (this.props.first) {
      setTimeout(() => {
        this.setState({ view: 'expanded' })
        this.props.setCurrentView(this.props.name)
      }, 50)
    }
  }

  toggleProjectInfo = async(event) => {
    const name = event.target.id
    const { setCurrentView } = this.props
    const checkView = this.props.currentView

    if (checkView === name) {
      setCurrentView('')
      return
    }

    await setCurrentView(name)
  }

  checkView = () => {
    const { projectName } = this.state
    const { currentView } = this.props

    if (currentView === projectName) {
      return 'expanded'
    }

    else {
      return 'collapsed'
    }
  }

  render() {
    const { last } = this.state
    const view = this.checkView()
    
    const {
      name,
      title,
      photo,
      mobilePhoto,
      frontEnd,
      backEnd,
      liveLink,
      repoLink,
      paragraph1,
      paragraph2,
    } = this.props

    return(
      <div id={name} className={`project-wrapper ${view}`}>

        <div className={`project ${name}`}  id={name} onClick={(event) => this.toggleProjectInfo(event)}>
          <p>{title.toUpperCase()}</p>
        </div>

        <div className={`project-info ${last}`}>
          <div className='info-background'>
            <div className={`img-container ${name}-img-container`}>
              <img src={photo} alt={name} className={`${name}-image main-image`} />
              <div  className='vl vl3' />
              <img src={mobilePhoto} alt={`${name}-mobile`} className={`${name}-mobile mobile-image`} />
              <div  className='vl vl4' />
            </div>

            <div className={`project-links ${name}-links`}>
              <button className={`tech ${name}-tech`}>T E C H
                <div className='tech-info'>
                  <h3>Front End</h3>
                  <p>{frontEnd}</p>

                  <h3>{backEnd && 'Back End'}</h3>
                  <p>{backEnd && backEnd}</p>

                </div>
              </button>
              <a href={liveLink} 
              target='_blank' rel='noopener noreferrer'>Live App</a>
              <a href={repoLink}
              target='_blank' rel='noopener noreferrer'>GitHub</a>
            </div>

            <div className={`info-container ${name}-info`}>
              <h2 className={`${name}-title`}>{title}</h2>
              <div className='hl hl1' />
            
              <div className={`p-container mm-p ${name}-p-container`}>
                <p>{paragraph1}</p>
                <p>{paragraph2}</p>
              </div>

            </div>
            <div className = 'vl v2 mv2' />

          </div>
        </div>
      </div>
    )
  }
}