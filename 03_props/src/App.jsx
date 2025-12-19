import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user="Anzar" url="https://plus.unsplash.com/premium_photo-1765718915206-f3bcb87444b7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" age={24}/>
      <Card user="Sarfaraz" url="https://images.unsplash.com/photo-1764336312138-14a5368a6cd3?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" age={26} />
    </div>
  )
}
export default App