import React from 'react'
import Gallery from '../Gallery/Gallery'

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
      images,
      icons,
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
            </div>

            <div className={`info-container ${name}-info`}>
              <h2 className={`${name}-title`}>{title}</h2>
              <div className='links-area'>
                <a href={repoLink} target='_blank' rel='noopener noreferrer'>GitHub</a>
                <a href={liveLink} target='_blank' rel='noopener noreferrer'>Live App</a>
              </div>
              <div className='hl hl1' />
            
              <div className={`p-container mm-p ${name}-p-container`}>
                <p>{paragraph1}</p>
                <p>{paragraph2}</p>
              </div>
            </div>

            <div className='tech-area'>
              {icons && icons.map(iconClass => {
                return(
                  <i className={iconClass} key={iconClass} ></i>
                )
              })}
            </div>

            <Gallery 
              name={name}
              images={images}
            />

          </div>
        </div>

      </div>
    )
  }
}