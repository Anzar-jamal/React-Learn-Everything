import React from 'react'

const App = () => {

  

  const inputChangeHandler = (e)=>{
    console.log(e.target.value)
  }
  return (
    <div>
      <input onChange={inputChangeHandler} type="text" />
      <button  >Change user</button>
    </div>
  )
}

export default App