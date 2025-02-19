import { useState } from 'react'

function App() {

  return (
    <>
      {/* <div className='bg-deepblue container'>
        <h1 className='text-5xl font-bold text-white'>Welcome with tailwind</h1>

        <button className='bg-amber text-alambaster border-4 text-2xl font-bold mt-12 rounded px-6 py-4 animate-pulse'>Click me!</button>

        <input type='text' placeholder='Enter your name' className='bg-white text-lg text-amber border-2 p-4 rounded-2xl ml-4 outline-0'/>
      </div> */}

      {/* <div className='@container border p-4'>
        <div className='grid grid-cols-1 @sm:grid-cols-3 @max-md:grid-cols-1 gap-4'>
          <div className='bg-blue-500 h-40'></div>
          <div className='bg-green-500 h-40'></div>
          <div className='bg-red-500 h-40'></div>
          <div className='bg-yellow-500 h-40'></div>
        </div>
      </div> */}

      <div className='@container border p-4'>
        <div className='flex gap-4'>
          <div className='bg-blue-500 h-40 w-64 '></div>
          <div className='bg-green-500 h-40 w-64 @min-md:@max-xl:hidden'></div>
          <div className='bg-red-500 h-40 w-64 '></div>
          {/* <div className='bg-yellow-500 h-40 w-64'></div> */}
        </div>
      </div>

    </>
  )
}

export default App
