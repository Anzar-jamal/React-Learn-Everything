import React from 'react'

const Card = () => {
  let user = "Anzar"
  return (
    <div>
      <div className='card' >
        <h1>Hello! I am {user}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, cupiditate.</p>
      </div>
    </div>
  )
}

export default Card