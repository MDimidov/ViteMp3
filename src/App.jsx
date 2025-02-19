import { useState } from 'react'

function App() {

  return (
    <>
      <div className='bg-deepblue container'>
        <h1 className='text-5xl font-bold text-white'>Welcome with tailwind</h1>

        <button className='bg-amber text-alambaster border-4 text-2xl font-bold mt-12 rounded px-6 py-4 animate-pulse'>Click me!</button>

        <input type='text' placeholder='Enter your name' className='bg-white text-lg text-amber border-2 p-4 rounded-2xl ml-4 outline-0'/>
      </div>


    </>
  )
}

export default App
