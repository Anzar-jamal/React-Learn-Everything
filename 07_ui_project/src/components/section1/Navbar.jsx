import React from 'react'
import { Landmark } from 'lucide-react'

const Navbar = () => {
  return (
    <div className='flex pt-8 justify-between px-12' >
        <button className='bg-black text-white py-1.5 px-2 rounded-xl' >Target Audience</button>
        <div className='flex bg-gray-300 py-1.5 px-2.5 rounded-lg ' >
            <Landmark className='mt-2' size={20} strokeWidth={3} />
            <button className='bg-gray-300 py-1.5 tracking-wide px-2.5 rounded-lg' >     DIGITAL BANKING PLATEFORM</button>
        </div>
    </div>
  )
}

export default Navbar