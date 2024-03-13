import React from 'react'

import v1 from "../../assets/v1.jpg"
import v2 from "../../assets/v2.jpg"
import v3 from "../../assets/v3.jpg"
import v4 from "../../assets/v4.jpg"


const Special_Event = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="border border-gray-300 rounded-md p-4 mb-4">
          <h2 className="text-xl font-bold mb-2">Project Competition</h2>
          <p className="mb-4">
            Be creative!! Be innovative!! Convert your ideas into actions; show your innovation to the world. You can present your skills and your work in front of experts.
          </p>
          <div>
            <h3 className="font-bold mb-2">Student Coordinators:</h3>
            <ul>
              <li><strong>Mr. Krishna Ardhapurkar:</strong> 9322449552</li>
              <li><strong>Mr. Mangesh Kattulwad:</strong> 9503579989</li>
            </ul>
          </div>
        </div>

        <div className="border border-gray-300 rounded-md p-4 mb-4">
          <h2 className="text-xl font-bold mb-2">Click the Best</h2>
          <p className="mb-4">
            This event is for those who like snapping photos all the time. So, gear up with your cameras no matter which one, a digicam, a mobile, only the moment matters. This event is all about such moments happening around the day of Visiotech 2023. Everyone is invited to join and start clicking.
          </p>
          <div>
            <h3 className="font-bold mb-2">Student Coordinators:</h3>
            <ul>
              <li><strong>Mr. Shivam Merewar:</strong> 7774885865</li>
              <li><strong>Mr. Sumit Rathod:</strong> 9322277560</li>
            </ul>
          </div>
        </div>

        <div className="border border-gray-300 rounded-md p-4 mb-4">
          <h2 className="text-xl font-bold mb-2">Picasso</h2>
          <p className="mb-4">
            Aims to offer a platform where students can demonstrate their drawing skills. Following are the themes for the drawings:
            <ul>
              <li>Artificial Intelligence</li>
              <li>Environment and Climate Change</li>
              <li>Artwork created using different symbols from engineering studies</li>
              <li>Digital India</li>
              <li>Make in India</li>
              <li>Open (Any theme of your choice)</li>
            </ul>
          </p>
          <div>
            <h3 className="font-bold mb-2">Student Coordinators:</h3>
            <ul>
              <li><strong>Ms. Shambhavi Chandajkar:</strong> 7058072033</li>
              <li><strong>Ms. Priya PatI:</strong> 9921998864</li>
            </ul>
          </div>
        </div>

        <div className="border border-gray-300 rounded-md p-4 mb-4">
          <h2 className="text-xl font-bold mb-2">Paper Presentation</h2>
          <p className="mb-4">
            Here comes an opportunity to display your talent by presenting a paper on recent advancement in any engineering field.
          </p>
          <div>
            <h3 className="font-bold mb-2">Student Coordinators:</h3>
            <ul>
              <li><strong>Ms. Sahitya Grunam:</strong> 7499489168</li>
              <li><strong>Mr. Vaishnav Sasane:</strong> 9811297138</li>
            </ul>
          </div>
        </div>

        <div className="border border-gray-300 rounded-md p-4 mb-4">
          <h2 className="text-xl font-bold mb-2">Poster Presentation</h2>
          <p className="mb-4">
            Have you ever made your thoughts come into existence in front of your eyes? Now it is your chance to showcase your ideas through poster presentation.
          </p>
          <div>
            <h3 className="font-bold mb-2">Student Coordinators:</h3>
            <ul>
              <li><strong>Ms. Vaishnavi Deshmukh:</strong> 9420541599</li>
              <li><strong>Ms. Sharakshi Kharadkar:</strong> 7020889448</li>
            </ul>
          </div>
        </div>

        <div className="border border-gray-300 rounded-md p-4 mb-4">
          <h2 className="text-xl font-bold mb-2">Inaugural Ceremony Of VISIOTECH 2023</h2>
          <p>By Dr.M.B.Kokre, Director, S.G.G.S. IE&T and Kamalkishor Kadam, Chairman & Dr.Geeta S. Lathkar, Director MGM’s College of Engineering, Nanded</p>
        </div>

        <div className="border border-gray-300 rounded-md p-4 mb-4">
          <h2 className="text-xl font-bold mb-2">Visiotech Student Coordinator</h2>
          <p>Mr.Shivlad Rahul (7262044688)</p>
        </div>

        <div className="border border-gray-300 rounded-md p-4 mb-4">
          <h2 className="text-xl font-bold mb-2">Financial Head</h2>
          <p>Mr.Damkondwar Santosh (7030247384)</p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-200 h-48 rounded-md">
            <img src={v1} alt="" className='object-cover w-full h-full rounded-md' />

          </div>
          <div className="bg-gray-200 h-48 rounded-md">
            <img src={v2} alt="" className='object-cover w-full h-full rounded-md' />

          </div>
          <div className="bg-gray-200 h-48 rounded-md">
            <img src={v3} alt="" className='object-cover w-full h-full rounded-md' />

          </div> <div className="bg-gray-200 h-48 rounded-md">
            <img src={v4} alt="" className='object-cover w-full h-full rounded-md' />

          </div>
        </div>
      </div>
    </div>
  )
}

export default Special_Event
