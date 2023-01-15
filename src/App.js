import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Header from './components/Header/Header'
import About from './routes/About/About'
import Projects from './routes/Projects/Projects'
import './App.css';

// IMAGES
import portraitImage from './images/sibw.jpg'

// COMPONENTS
import icons from './components/IconClasses/IconClasses'
import galleryImages from './components/GalleryImages/GalleryImages'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentView: '',
      images: {},
      iconClasses: {},
      portrait: null,
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
        pearegrine: galleryImages.pearegrine,
        memoryField: galleryImages.memoryField
      },

      iconClasses: {
        molly: icons.molly,
        quoter: icons.quoter,
        miMood: icons.miMood,
        bookmarks: icons.bookmarks,
        pearegrine: icons.pearegrine
      },

      portrait: portraitImage,
    })
  }

  render() {
    const { currentView, images, iconClasses, portrait, } = this.state
    return (
      <div className="App">
  
        <Route exact path='/'>
          <Redirect to='/projects'/>
        </Route>
        
        <Route path='/'>
          <Header />
  
          <Switch>
  
            <Route path='/about' render={() => <About
              portrait={portrait}
            />} />
            <Route path='/projects' render={() => <Projects
              currentView={currentView}
              setCurrentView={this.setCurrentView}
              images={images}
              iconClasses={iconClasses}
            />} />
  
          </Switch>
        </Route>
      </div>
    );
  }
}

export default App;