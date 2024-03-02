import { AdsClick } from '@mui/icons-material'
import React from 'react'

function Marquee() {
  return (
    <div >
      <div className='bg-primary p-1 text-light fw-bold shadow lg:text-2xl text-lg' >
        <marquee behavior="scroll" direction="left">

          Register Visiotech2024 : 
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdnfS-hmnPpFpxabZ6T0Qgeb2BQRwkc317dBZzXRPZB4F1sVg/viewform" className='text-thin  text-blue-900 ms-3' target="_blank">
          
          click here
          </a>

        </marquee>

      </div>
    
    </div>
  )
}

export default Marquee
