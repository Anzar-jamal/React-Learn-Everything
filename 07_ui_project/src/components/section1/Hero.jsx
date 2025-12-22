import React from 'react'
import ImageCard from './ImageCard'
import LeftHero from './LeftHero'

const Hero = () => {

  const data = ["/images/bg1.jpeg","/images/bg2.jpeg","/images/bg3.jpeg"]

  return (
    <div className='flex px-12' >
        <LeftHero/>


        <div className='flex gap-8' >

            <ImageCard url={data[0]} />
            <ImageCard url={data[1]} />
            <ImageCard url={data[2]} />

        </div>


    </div>
  )
}

export default Hero