import React from 'react'
import { Link } from 'react-router-dom'

function Main1() {
  return (
    <div className=' lg:p-5 p-3 d-flex mt-4    mb-5 shadow  flex-column align-items-center ' style={{ backgroundColor: "whitesmoke" }}>
      <div className='d-flex flex-column fw-bolder justify-content-center align-items-center '  >
        <div className='flex lg:flex-row flex-col items-center  justify-center gap-2 w-full lg:p-5 text-center '>

          <span className='text-dark mt-3 text-2xl lg:text-5xl ' >Today's Vision </span>
          <span className='text-primary text-2xl lg:text-5xl lg:mt-3' > Tomorrow's Technology</span>
        </div>
      </div>
      <hr className='w-full mt-3' />

      <div className="container  grid grid-cols-1 lg:grid-cols-2 mt-5">
        <div className=" ">

          <div className='flex items-center gap-3 justify-start'>
            <img src="https://www.mgmmumbai.ac.in/imsr/pictures/KamalKishorKadam1.jpg" className='shadow rounded-full w-[80px] lg:w-[90px] h-[80px] lg:h-[90px] object-cover ' alt="" />
            <div className='flex flex-col'>
              <span className='lg:text-2xl text-xl font-bold'>Kamalkishor Kadam</span>
              <span className='text-sm text-grey-500'> Chairman </span>
            </div>
          </div>
          <p className='mt-4 text-justify text-lg   '>
            Dear Sir/Madam, <br />

            It is immense pleasure to write for Visiotech-2024, a technical event organized by the students of MGM’s College of Engineering, Nanded. This has become a regular feature of this campus with encouraging participation of students from all other engineering colleges. Knowledge, aptitude, and skills together make the education complete. Along with regular course, events like Visiotech provide opportunities to the students to enhance their potential, making them aware of the current trends in their chosen faculty for their engineering education.
          </p>
          <Link to="/about" className='text-primary fs-5'>read more</Link>
        </div>
        <div className=" flex justify-center ">

          <iframe className='shadow-lg mt-5 lg:mt-0 lg:w-[500px] lg:h-[300px] w-[600px] h-[200px]' src="https://www.youtube.com/embed/hC9GpxRy9SE?si=0SItnzfwUqsIQ6Nz" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>

      </div>
    </div>
  )
}

export default Main1
