import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Header from './components/Header/Header'
import About from './routes/About/About'
import Projects from './routes/Projects/Projects'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
  
        <Route exact path='/'>
          <Redirect to='/projects'/>
        </Route>
        
        <Route path='/'>
          <Header />
  
          <Switch>
  
            <Route path='/about'><About /></Route>
            <Route path='/projects'><Projects /></Route>
  
          </Switch>
        </Route>
      </div>
    );
  }
}

export default App;