import React from 'react'
import { ArrowRight } from 'lucide-react'

const ImgButton = () => {
  return (
    <div className='flex justify-baseline' >
        <span className='bg-blue-500 pl-2.5 pr-5 rounded-2xl' >Satisfied</span>
        <ArrowRight className=' mt-0.5 rounded-[50%] bg-blue-500 text-black' size={20} />
    </div>
  )
}

export default ImgButton