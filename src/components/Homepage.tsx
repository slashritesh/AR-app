import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div className='home-wrap'>
        <h1>Augumented reality</h1>
        <Link to={'/xrcube'}>
        <button className='btn'>Enter In AR</button>
        </Link>
    </div>
  )
}

export default Homepage