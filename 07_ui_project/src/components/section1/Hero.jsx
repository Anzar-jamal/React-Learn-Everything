import React from 'react'
import ImageCard from './ImageCard'
import LeftHero from './LeftHero'

const Hero = () => {
  return (
    <div className='flex px-12' >
        <LeftHero/>


        <div className='flex gap-8' >

            <ImageCard/>
            <ImageCard/>
            <ImageCard/>

        </div>


    </div>
  )
}

export default Hero