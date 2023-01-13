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
import pearegrinePear from '../../images/pearegrine-Pear.png'

// COMPONENTS
import Project from '../../components/Project/Project'

export default class Projects extends React.Component {
  render() {
    const { currentView, setCurrentView, images, iconClasses } = this.props
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
          title='Art Portfolio'
          photo={mollyWide}
          images={images.molly}
          icons={iconClasses.molly}
          liveLink='https://molly-website.vercel.app/'
          repoLink='https://github.com/Loxphordex/molly-website'
          paragraph1='A portfolio for Seattle all-arounder Molly Reusser,
            who also designed the site. Several mediums are organized and displayed including illustration, 
            sculpture, and animation.'
          paragraph2='Molly can customize the photos on her site using a secret authorization system.'
          last=''
          setCurrentView={setCurrentView}
          currentView={currentView}
        />

        <Project
          first={false}
          name='memoryfield'
          title='MemoryField'
          photo={''}
          images={images.memoryField}
          liveLink='https://memoryfield.vercel.app/'
          repoLink='https://github.com/Loxphordex/Memoryfield'
          paragraph1='...'
          paragraph2='...'
          last=''
          setCurrentView={setCurrentView}
          currentView={currentView}
        />



          <Project
            first={false}
            name='pearegrine'
            title='Pearegrine Clothing'
            photo={pearegrinePear}
            images={images.pearegrine}
            icons={iconClasses.pearegrine}
            liveLink='https://pearegrine.com'
            repoLink='https://github.com/Loxphordex/k-client'
            paragraph1='A t-shirt company'
            paragraph2='testing testing'
            last=''
            setCurrentView={setCurrentView}
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
              last='last'
              setCurrentView={setCurrentView}
              currentView={currentView}
            />

            {/* <Project 
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
              setCurrentView={setCurrentView}
              currentView={currentView}
            /> */}

            {/* <Project 
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
              setCurrentView={setCurrentView}
              currentView={currentView}
            /> */}
          </div>
        </div>
    ) 
  }
}