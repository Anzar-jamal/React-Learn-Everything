import React from 'react'
import { ArrowUpRight } from 'lucide-react'

const LeftHero = () => {
  return (
    <div>
        <div className='w-96 min-h-[80vh] pt-20 flex flex-col justify-between' >
            <div>
                <h2 className='text-4xl font-bold' >Prospective <br/> Customer<br/> Segment</h2>
                <p className='pt-3 text-sm font-normal text-gray-900' >Depending on customer <br/>satisfaction and access <br/> to banking products, potential <br/> target audience can be divide <br/> into three groups</p>
            </div>
            <ArrowUpRight size={62} strokeWidth={2} />
        </div>
    </div>
  )
}

export default LeftHero