import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <nav role='navigation' className='main-nav'>
      <ul>
        <h1 className='name'> <Link to='projects'>SILAS HALLAHAN</Link> </h1>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/projects'>Projects</Link></li>
      </ul>
    </nav>
  )
}