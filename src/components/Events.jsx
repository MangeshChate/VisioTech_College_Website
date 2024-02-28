import React, { useState } from 'react';
import Special_Event from './Events/Special_Event';
import CSE_Event from './Events/CSE_Event';
import IT_Event from './Events/IT_Event';
import ELE_Event from './Events/ELE_Event';
import Civil_Event from './Events/Civil_Event';
import Mechanic_Event from './Events/Mechanic_Event';

const Events = () => {
  const [activeSection, setActiveSection] = useState('');

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const renderSectionInfo = () => {
    switch (activeSection) {
      case 'VisioTech Special Events':
        return <Special_Event/>;
      case 'Computer Science & Engineering Events':
        return <CSE_Event/>;
      case 'Information Technology Events':
        return <IT_Event/>;
      case 'Electronics & Telecommunication Events':
        return <ELE_Event/>;
      case 'Civil Engineering Events':
        return <Civil_Event/>;
      case 'Mechanical Engineering Events':
        return <Mechanic_Event/>;
      default:
        return null;
    }
  };

  return (
    <div className="container mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button className={`cursor-pointer px-4 py-2 rounded-lg focus:outline-none ${activeSection === 'VisioTech Special Events' ? 'text-white bg-blue-900 font-bold' : 'text-gray-700 bg-gray-200 hover:bg-gray-300'}`} onClick={() => handleSectionClick('VisioTech Special Events')}>VisioTech Special Events</button>
        <button className={`cursor-pointer px-4 py-2 rounded-lg focus:outline-none ${activeSection === 'Computer Science & Engineering Events' ? 'text-white bg-blue-900 font-bold' : 'text-gray-700 bg-gray-200 hover:bg-gray-300'}`} onClick={() => handleSectionClick('Computer Science & Engineering Events')}>Computer Science & Engineering Events</button>
        <button className={`cursor-pointer px-4 py-2 rounded-lg focus:outline-none ${activeSection === 'Information Technology Events' ? 'text-white bg-blue-900 font-bold' : 'text-gray-700 bg-gray-200 hover:bg-gray-300'}`} onClick={() => handleSectionClick('Information Technology Events')}>Information Technology Events</button>
        <button className={`cursor-pointer px-4 py-2 rounded-lg focus:outline-none ${activeSection === 'Electronics & Telecommunication Events' ? 'text-white bg-blue-900 font-bold' : 'text-gray-700 bg-gray-200 hover:bg-gray-300'}`} onClick={() => handleSectionClick('Electronics & Telecommunication Events')}>Electronics & Telecommunication Events</button>
        <button className={`cursor-pointer px-4 py-2 rounded-lg focus:outline-none ${activeSection === 'Civil Engineering Events' ? 'text-white bg-blue-900 font-bold' : 'text-gray-700 bg-gray-200 hover:bg-gray-300'}`} onClick={() => handleSectionClick('Civil Engineering Events')}>Civil Engineering Events</button>
        <button className={`cursor-pointer px-4 py-2 rounded-lg focus:outline-none ${activeSection === 'Mechanical Engineering Events' ? 'text-white bg-blue-900 font-bold' : 'text-gray-700 bg-gray-200 hover:bg-gray-300'}`} onClick={() => handleSectionClick('Mechanical Engineering Events')}>Mechanical Engineering Events</button>
      </div>
      <br />
      <hr />
      <div className="mt-5">
        {renderSectionInfo()}
      </div>
    </div>
  );
};

export default Events;
