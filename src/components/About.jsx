import React from 'react';
import {Instagram , Facebook , Twitter} from "@mui/icons-material"
const aboutData = [
  {
    name: "Kamalkishor Kadam",
    description: "Chairman",
    image: "https://www.mgmmumbai.ac.in/mgmcet/sites/default/files/inline-images/chairman_0_0.jpg",
    quote:"I am very happy to extend a warm welcome to all students for participating in this event, and grab the awards proving your talents.",
    paragraph:`
    It is immense pleasure to write for VSIOTECH-2023, a technical event organized by the students of MGM’s college of Engineering, Nanded. This has become a regular feature of this campus with encouraging participation of students from all other engineering college.
    Knowledge, aptitude and skills together made the Education complete. Along with regular course, events like VISIOTECH provide opportunities to the students to enhance their potential making them aware of the current trends in their chosen faculty for their Engineering Education through the various competitions organized, exploring the creative talents of budding Engineers.
    VISIOTECH provides a common platform for all Engineering students, to come together, share the ideas, accept the challenges and prove their talents, working together in the betterment of technical education.
    On behalf of MGM family I am very happy to extend a warm welcome to all students for participating in this event, and grab the awards proving your talents.
    Looking forward for your active participation.`
  },
  {
    name: "Dr. Mrs. Geeta S. Lathkar",
    description: "Director",
    quote:"Come together and contribute for the development of Engineering Education. I look forward to see you all here.",
    image: "https://www.visiotech2023.info/img/lathkarmam.jpg",
    paragraph:`Since 1984 MGM’s college of Engineering is functioning in this region maintaining a steady progress. With the UG, PG courses in five faculties of Engineering, the Research centres in Mechanical and Computer Engineering also made their mark along the way. We take pride in our pass outs working in organizations of repute all over the world.
    While educating today’s Engineers along with the knowledge of different subjects, including the appropriate skill-sets has become essential. To think creatively, to work on ideas, to communicate well, to work in a team are the inevitable parts of education if it is to be there for ‘Value addition’ in true sense.
    To enhance the capabilities you have to go on challenging yourself and the opportunity of having such a challenges is provided through the activities like “VISIOTECH”. This year it has been planned on 11th May 2023.
    This year along with popular events like Blind C, Code It, Troubleshoot It, Hack & Hunt in Computer Science and Engineering; Bug Munch, Query Mania, Web Magic, Python Striker in Information Technology; Minute to Win It, Circuitrix , Circuit Debugging, Technical Rangoli in Electronics and Telecommunication Engineering; CAD War, Bridge It, Traversing, Lab Expert (Concrete) in Civil Engineering; CNC Programming , Drone Technology, CAD War, Robotic in Mechanical Engineering; some interdisciplinary Events like Project Competition, Click the Best, Picasso, Poster Presentation, Paper Presentation has been organized.
    I welcome the students with creative talents to come forward and be a part of humming enthusiasm of MGM students in our campus. Challenge yourself and be the winners. Share the ideas and learn from each other. Come together and contribute for the development of Engineering Education.
    I look forward to see you all here.`
  }
]

function About() {
  return (
    <div className='container-fluid mt-5 flex flex-col gap-5'>

    {aboutData.map((data, index) => (
      
      <div className="container-fluid w-full lg:w-2/3 rounded-2xl shadow-xl lg:p-5 p-1" key={index}>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:p-3 p-2">
          <div className='flex flex-col justify-center items-center lg:items-start p-4'>
            <img
              src={data.image}
              className='lg:w-[300px] w-full h-[300px] position-center object-cover rounded-xl  shadow'
              alt=""
            />
            <div className='flex flex-col mt-3 text-center lg:text-left'>
              <span className='text-2xl lg:text-3xl font-bold'>{data.name}</span>
              <span className='text-lg text-gray-500'>{data.description}</span>
            </div>
          </div>
          <div className='flex-col justify-center  hidden lg:flex p-5'>
            <p className='text-2xl w-full lg:text-4xl font-serif text-gray-700  '>
              {data.quote}
            </p>
           
          </div>
        </div>
        <div className='lg:p-3  p-3'>
          <p className='lg:text-xl text-lg text-justify'>
            {data.paragraph}
          </p>
        </div>
      </div>
    ))}

    </div>
  );
}

export default About;
