import React from 'react'
import quoterLabel from '../../../images/quoter-label.png'
import qouterMobile from '../../../images/quoter-mobile.png'
import './Quoter.css'


export default class Quoter extends React.Component {

  render() {

    return (
        <div id='quoter' className='project-wrapper collapsed' 
            onClick={(event) => this.props.toggleProjectInfo(event)}>

            <div className='project quoter'>
                <p>QUOTER</p>
            </div>

            <div className='project-info'>
                <div className='info-background'>
                    <div className='img-container quoter-img-container'>
                        <img src={quoterLabel} alt='quoter' className='quoter-project-image' />
                        <div  className='vl vl1' />
                        <img src={qouterMobile} alt='quoter-mobile' className='quoter-mobile' />
                    </div>

                    <div className='info-container'>
                    <h2 className='quoter-title'>Quoter</h2>
                    <div className='hl hl1' />
                    <div className='p-container'>
                        <p>A journal app that scans what you write, 
                        and returns relevant quotes to spark inspiration.</p>
                        <p>Discover new authors as well as new perspectives.</p>
                    </div>
                    <div className='project-links quoter-links'>

                        <button className='tech'>T E C H
                                <div className='tech-info'>
                                <h3>Front End</h3>
                                <p>Javascript, React</p>
    
                                <h3>Back End</h3>
                                <p>Express, PostgreSQL</p>
                            </div>
                        </button>
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
    )
    
  }

}