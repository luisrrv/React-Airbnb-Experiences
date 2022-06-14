import React from 'react'
import grid from '../images/photo-grid.png'

const Hero = () => {
  return (
  <section className='hero'>
    <img src={grid} alt='hero' className='hero--photo' />
    <h1 className='hero--header'>Experiences for you</h1>
    <p className='hero--text'>Join unique interactive activities led by one-of-a-kind hosts.
</p>
  </section>
  )
}

export default Hero;
