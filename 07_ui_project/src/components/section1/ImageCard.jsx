import React from 'react'
import ImgButton from './ImgButton'

const data = ["/images/bg1.jpeg","/images/bg2.jpeg","/images/bg3.jpeg"]

const ImageCard = (props) => {
  const url = props.url
  
  return (
    <div style={{ backgroundImage: `url(${url})`, objectFit:'cover', backgroundSize:'cover'}}  
      className='bg-gray-600 mt-10 h-[90%] flex flex-col justify-between  bg-{url w-50 rounded-4xl ' >

        <p className=' h-10 w-10 pt-2 rounded-[50%]  mt-3 ml-3 inline-block bg-white text-center' > 1</p>
        <div className='m-5'>
          <ImgButton />
        </div>
    </div>
  )
}

export default ImageCard