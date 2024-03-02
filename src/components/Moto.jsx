
import React from 'react';
import { Star, AccessTime, Lightbulb, Group, ThumbUp, TrendingUp } from '@mui/icons-material';

const Moto= () => {
  return (
    <div className="bg-gray-100 py-16">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl lg:text-5xl font-bold mb-8">Our Mission & Motto</h2>
      <p className="text-gray-600 mb-12">
      Challenge Yourself, Inspire Excellence
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mottoItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4  bg-white rounded-lg shadow-md hover:shadow-lg hover:transform hover:scale-105 transition-all duration-300"
          >
            <div className="mb-4 text-blue-500">
              {item.icon}
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
        <div className='mt-5 p-3'>
          <p>
          Since 1984, MGM's College of Engineering has been dedicated to fostering a culture of continual progress and excellence in engineering education. Our mission is to provide comprehensive undergraduate and postgraduate programs across five faculties of engineering, empowering students with both theoretical knowledge and practical skill sets. We take pride in nurturing engineers who not only excel academically but also demonstrate creativity, effective communication, teamwork, and problem-solving abilities.
          </p>
        </div>
    </div>
  </div>
  );
}

const mottoItems = [
  {
    title: 'Innovation',
    description: 'We strive to cultivate a spirit of innovation among our students, encouraging them to think outside the box, explore new ideas, and pioneer groundbreaking solutions to real-world challenges. Through initiatives like "Visiotech" and interdisciplinary project competitions, we provide platforms for students to unleash their creativity, develop innovative technologies, and drive positive change in society. ',
    icon: <Lightbulb fontSize="large" />,
  },
  {
    title: 'Teamwork',
    description: 'At MGMs College of Engineering, we recognize the importance of teamwork in achieving collective success. Through collaborative projects, group assignments, and extracurricular activities, we foster a collaborative mindset among our students, teaching them the value of cooperation, communication, and shared goals. We believe that effective teamwork not only enhances learning outcomes but also prepares students for the dynamic demands of the professional world.',
    icon: <Group fontSize="large" />,
  },
  {
    title: 'Quality',
    description: 'Quality is at the core of everything we do at MGMs College of Engineering. From our rigorous academic standards to our state-of-the-art facilities and experienced faculty, we are committed to delivering excellence in education. Through continuous improvement processes and feedback mechanisms, we ensure that our programs meet the highest standards of quality and relevance, preparing our students to excel in their chosen fields and make meaningful contributions to society.',
    icon: <ThumbUp fontSize="large" />,
  },

];

export default Moto;
