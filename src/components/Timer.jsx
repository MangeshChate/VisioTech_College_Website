import React from 'react'
import CountdownTimer from './CountdownTimer'

function Timer() {
  const endDate = "2024-03-27T23:59:59";
  return (
    <div className='p-3 lg:p-5 text-light bg-gradient-to-br from-indigo-800 to-gray-800'>

      <div className='container gap-3 lg:gap-0 flex flex-col lg:flex-row justify-around lg:p-5 p-4 items-center'>
        <div className='flex flex-col lg:gap-3 gap-1 '>
          <span className='text-small  lg:text-2xl '>
            Events Date  27 & 28 March 2024
          </span>
          <span className='text-lg hidden lg:block lg:text-4xl lg:w-[400px] w-auto font-bold'>
            Count Every Second
            Until the Event
          </span>
        </div>
        <div className='flex justify-start items-center'>
        <CountdownTimer endDate={endDate} timerSize="5xl" />
        </div>
      </div>

    </div>
  )
}

export default Timer
