import React from 'react'

function Marquee() {
  return (
    <div >
      <div className='bg-primary p-1 text-light fw-bold shadow lg:text-2xl text-lg' >
        <marquee behavior="scroll" direction="left">
        Registration Link will be Available Soon...

        </marquee>

      </div>
    
    </div>
  )
}

export default Marquee
