import React from 'react'

// STYLES
import './Projects.css'
import './ProjectInfo.css'
import '../../components/Project/Project.css'
import './ProjectDetails.css'

// IMAGES
import quoterLabel from '../../images/quoter-label.png'
import happy from '../../images/happy.png'
import bookmarksWide from '../../images/bookmarks-wide.png'
import mollyWide from '../../images/molly-desktop.png'

// COMPONENTS
import Project from '../../components/Project/Project'
import icons from '../../components/IconClasses/IconClasses'
import galleryImages from '../../components/GalleryImages/GalleryImages'

export default class Projects extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentView: '',
      images: {},
      iconClasses: {},
    }
  }

  componentDidMount() {
    this.generateImages()
  }

  setCurrentView = (name) => {
    this.setState({ currentView: name })
  }

  generateImages = () => {
    this.setState({
      images: {
        molly: galleryImages.molly,
        quoter: galleryImages.quoter,
        miMood: galleryImages.miMood,
        bookmarks: galleryImages.bookmarks,
      },

      iconClasses: {
        molly: icons.molly,
        quoter: icons.quoter,
        miMood: icons.miMood,
        bookmarks: icons.bookmarks,
      }
    })
  }

  render() {
    const { currentView, images, iconClasses } = this.state
    return (
        <div className='projects-container'>
        
          <div className='projects-overview'>
            <h2>PROJECTS</h2>
            <section className='pro-dec-1' />
          </div>
  
          <div className='projects-list' id='projects-list'>

          <Project 
              first={true}
              name='molly'
              title='Art by Molly Reusser'
              photo={mollyWide}
              images={images.molly}
              icons={iconClasses.molly}
              liveLink='https://mollyreusser.com/'
              repoLink='https://github.com/Loxphordex/molly-website'
              paragraph1='An art portfolio for Seattle all-arounder Molly Reusser,
                who also designed the site. Several mediums are organized and displayed including illustration, 
                sculpture, and animation.'
              paragraph2='Molly can customize the photos on her site using a secret authorization system.'
              last=''
              setCurrentView={this.setCurrentView}
              currentView={currentView}
            />

            <Project 
              first={false}
              name='quoter'
              title='Quoter'
              photo={quoterLabel}
              images={images.quoter}
              icons={iconClasses.quoter}
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
              images={images.miMood}
              icons={iconClasses.miMood}
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
              images={images.bookmarks}
              icons={iconClasses.bookmarks}
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