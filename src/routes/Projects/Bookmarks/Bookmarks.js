import React from 'react'
import mobile from '../../../images/bookmarks-mobile.png'

export default class Bookmarks extends React.Component {
  
  render() {
    return(
      <div id='bookmarks' className='project-wrapper collapsed'
        onClick={(event) => this.props.toggleProjectInfo(event)}>
        <div className='project bookmarks'>
          <p>BOOKMARKS</p>
        </div>
        <div className='project-info end-project'>
          <div className='info-background'>
            <img src={mobile} alt='bookmarks-mobile' className='bookmarks-mobile' />
            <div className='vl bm-vl' />
          </div>
        </div>
      </div>
    )
  }
}